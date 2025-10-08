import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function BookingAnalytics() {
  // tell TypeScript exactly what ref types are
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart<"line"> | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    // Destroy previous chart if exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(168, 85, 247, 0.5)");
    gradient.addColorStop(1, "rgba(168, 85, 247, 0)");

    // Create new chart
    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Bookings",
            data: [120, 150, 180, 220, 300, 280, 320, 290, 350, 370, 400, 420],
            fill: true,
            backgroundColor: gradient,
            borderColor: "#a855f7",
            tension: 0.4,
            pointBackgroundColor: "#a855f7",
            pointRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: "#fff",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#fff",
            },
            grid: {
              color: "rgba(255, 255, 255, 0.05)",
            },
          },
          y: {
            ticks: {
              color: "#fff",
            },
            grid: {
              color: "rgba(255, 255, 255, 0.05)",
            },
          },
        },
      },
    });

    // Cleanup on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} style={{ width: "100%", height: "250px" }} />;
}
