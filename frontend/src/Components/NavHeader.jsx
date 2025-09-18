// src/components/NavHeader.jsx

import React from "react";
import { NavLink } from "react-router-dom";

export const NavHeader = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/destinations", label: "Destinations" },
    { to: "/climate", label: "Climate" },
    { to: "/transport", label: "Transport" },
    { to: "/accommodation", label: "Accommodation" },
    { to: "/tourism-office", label: "Tourism Office" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-medium">
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          className={({ isActive }) =>
            isActive
              ? "text-blue-800 border-b-2 border-blue-800 pb-1"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};
