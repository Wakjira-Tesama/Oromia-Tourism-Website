import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function CustomerRatingsAnalytics() {
  // chartRef: HTMLCanvasElement | null
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  // chartInstanceRef: Chart | null
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return; // guard clause

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    // Destroy existing chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Customer Rating",
            data: [4.5, 4.6, 4.7, 4.6, 4.8, 4.9, 4.8],
            borderColor: "#facc15",
            backgroundColor: "rgba(250, 204, 21, 0.2)",
            fill: true,
            tension: 0.4,
            pointBackgroundColor: "#facc15",
            pointRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: { color: "#fff" },
          },
        },
        scales: {
          x: {
            ticks: { color: "#fff" },
            grid: { color: "rgba(255,255,255,0.05)" },
          },
          y: {
            ticks: { color: "#fff" },
            grid: { color: "rgba(255,255,255,0.05)" },
          },
        },
      },
    });

    // Cleanup on component unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} style={{ width: "100%", height: "250px" }} />;
}
