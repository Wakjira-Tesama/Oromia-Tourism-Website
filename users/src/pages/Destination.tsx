import React, { useState } from "react";
import { Link } from "react-router-dom";

// Images
import Bale from "../image/sanettiPlateau.jpg";
import Awash from "../image/awash2.jpg";
import Abijata from "../image/ostrich.jpg";
import Langano from "../image/langano-sunset.jpg";
import Borena from "../image/borena-hero.jpg";
import Haramaya from "../image/haramaya-tips.jpg";
import Wenchi from "../image/wenchi-hero.jpg";
import SofOmar from "../image/wenchi-hero.jpg";
import Irreecha from "../image/celebration.jpg";
import Gada from "../image/gada-assembly.jpg";

// ... (suuraa biroo akkuma jirutti fayyadami)

// Interfaces
export interface Destination {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
  price: number;
}

// ✅ Featured destinations exported for DropZone
export const featuredDestinations: Destination[] = [
  {
    name: "Bale Mountains",
    description: "Trek through the beautiful and biodiverse Bale Mountains.",
    imageUrl: Bale,
    link: "/destination/bale",
    price: 180,
  },
  {
    name: "Awash National Park",
    description:
      "Discover the diverse wildlife and stunning landscapes of Awash National Park.",
    imageUrl: Awash,
    link: "/destination/awash",
    price: 150,
  },
  {
    name: "Abijata",
    description: "Explore the breathtaking landscapes of the Simien Mountains.",
    imageUrl: Abijata,
    link: "/destination/Abijata",
    price: 100,
  },
  {
    name: "Borena",
    description: "Visit the ancient rock-hewn churches of Lalibela.",
    imageUrl: Borena,
    link: "/destination/Borena",
    price: 200,
  },
  {
    name: "Lake Langeno",
    description:
      "Experience the diverse cultures and tribes of the Omo Valley.",
    imageUrl: Langano,
    link: "/destination/Langano",
    price: 160,
  },
  {
    name: "Lake Haramaya",
    description: "Discover the ancient ruins and obelisks of Axum.",
    imageUrl: Haramaya,
    link: "/destination/Haramaya",
    price: 190,
  },
  {
    name: "Wenchi ",
    description: "Enjoy the beautiful landscapes and Lake Tana in Bahirdar.",
    imageUrl: Wenchi,
    link: "/destination/Wenchi",
    price: 170,
  },
  {
    name: "SofOmer Cave",
    description: "Explore the walled city and vibrant markets of Harar.",
    imageUrl: SofOmar,
    link: "/destination/sofOmer",
    price: 300,
  },
  {
    name: "Irreacha",
    description:
      "Visit the rock-hewn churches and rugged landscapes of Tigray.",
    imageUrl: Irreecha,
    link: "/destination/Irreacha",
    price: 0,
  },
  {
    name: "Gadaa System",
    description:
      "Experience one of the hottest places on Earth with unique landscapes in the Danakil Depression.",
    imageUrl: Gada,
    link: "/destination/Gada",
    price: 300,
  },
];

interface CalendarProps {
  // onAddToCart hin barbaachisu
}

const Calendar: React.FC<CalendarProps> = () => {
  const [showMore, setShowMore] = useState(false);

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1rem",
    width: "100%",
  };

  const cardStyle: React.CSSProperties = {
    border: "1px solid #ccc",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const cardHoverStyle: React.CSSProperties = {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "#fff",
    fontWeight: "bold",
    transition: "background-color 0.3s, transform 0.2s",
  };

  const buttonHoverStyle: React.CSSProperties = {
    backgroundColor: "#45a049",
    transform: "scale(1.05)",
  };

  return (
    <div style={{ width: "100%", padding: "1rem" }}>
      <h2>Destinations</h2>
      <div style={gridStyle}>
        {(showMore
          ? featuredDestinations
          : featuredDestinations.slice(0, 3)
        ).map((dest) => (
          <div
            key={dest.name}
            style={cardStyle}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, cardHoverStyle)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, cardStyle)
            }
          >
            <img
              src={dest.imageUrl}
              alt={dest.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <h3>{dest.name}</h3>
            <p>{dest.description}</p>
            <p>
              <b>Price:</b> ${dest.price}
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <Link to={dest.link}>
                <button
                  style={buttonStyle}
                  onMouseEnter={(e) =>
                    Object.assign(e.currentTarget.style, buttonHoverStyle)
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.currentTarget.style, buttonStyle)
                  }
                >
                  READ MORE →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowMore(!showMore)}
        style={{ marginTop: "1rem" }}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Calendar;
