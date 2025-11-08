import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Destination } from "../../../pages/Destination";

// Suuraalee import gochuu
import sanettiPlateau from "../../../image/sanettiPlateau.jpg";
import awash2 from "../../../image/awash2.jpg";
import ostrich from "../../../image/ostrich.jpg";
import borenaHero from "../../../image/borena-hero.jpg";
import langanoSunset from "../../../image/langano-sunset.jpg";
import haramayaTips from "../../../image/haramaya-tips.jpg";
import wenchiHero from "../../../image/wenchi-hero.jpg";
import celebration from "../../../image/celebration.jpg";
import gadaAssembly from "../../../image/gada-assembly.jpg";

const DropZone: React.FC = () => {
  const [cart, setCart] = useState<Destination[]>([]);
  const [selectedNames, setSelectedNames] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [allDestinations, setAllDestinations] = useState<Destination[]>([]);
  const navigate = useNavigate();

  // **Calendar.tsx irraa destinations (static + admin localStorage) load godhu**
  useEffect(() => {
    const staticDestinations: Destination[] = [
      {
        name: "Bale Mountains",
        description:
          "Trek through the beautiful and biodiverse Bale Mountains.",
        imageUrl: sanettiPlateau,
        link: "/destination/bale",
        price: 180,
      },
      {
        name: "Awash National Park",
        description:
          "Discover the diverse wildlife and stunning landscapes of Awash National Park.",
        imageUrl: awash2,
        link: "/destination/awash",
        price: 150,
      },
      {
        name: "Abijata",
        description:
          "Explore the breathtaking landscapes of the Simien Mountains.",
        imageUrl: ostrich,
        link: "/destination/Abijata",
        price: 100,
      },
      {
        name: "Borena",
        description: "Visit the ancient rock-hewn churches of Lalibela.",
        imageUrl: borenaHero,
        link: "/destination/Borena",
        price: 200,
      },
      {
        name: "Lake Langeno",
        description:
          "Experience the diverse cultures and tribes of the Omo Valley.",
        imageUrl: langanoSunset,
        link: "/destination/Langano",
        price: 160,
      },
      {
        name: "Lake Haramaya",
        description: "Discover the ancient ruins and obelisks of Axum.",
        imageUrl: haramayaTips,
        link: "/destination/Haramaya",
        price: 190,
      },
      {
        name: "Wenchi",
        description:
          "Enjoy the beautiful landscapes and Lake Tana in Bahirdar.",
        imageUrl: wenchiHero,
        link: "/destination/Wenchi",
        price: 170,
      },
      {
        name: "SofOmer Cave",
        description: "Explore the walled city and vibrant markets of Harar.",
        imageUrl: wenchiHero,
        link: "/destination/sofOmer",
        price: 300,
      },
      {
        name: "Irreacha",
        description:
          "Visit the rock-hewn churches and rugged landscapes of Tigray.",
        imageUrl: celebration,
        link: "/destination/Irreacha",
        price: 0,
      },
      {
        name: "Gadaa System",
        description:
          "Experience one of the hottest places on Earth with unique landscapes in the Danakil Depression.",
        imageUrl: gadaAssembly,
        link: "/destination/Gada",
        price: 300,
      },
    ];

    const saved = localStorage.getItem("destinations");
    const adminDestinations = saved
      ? JSON.parse(saved).map((d: any) => ({
          name: d.name,
          description: d.detail_information || "No description provided",
          imageUrl: d.image,
          link: `/destination/${d.id}`,
          price: d.price,
        }))
      : [];

    setAllDestinations([...staticDestinations, ...adminDestinations]);
  }, []);

  const handleSelect = (dest: Destination) => {
    if (selectedNames.includes(dest.name)) {
      setSelectedNames((prev) => prev.filter((name) => name !== dest.name));
      setCart((prev) => prev.filter((item) => item.name !== dest.name));
    } else {
      setSelectedNames((prev) => [...prev, dest.name]);
      setCart((prev) => [...prev, dest]);
    }
  };

  const removeFromCart = (name: string) => {
    setSelectedNames((prev) => prev.filter((n) => n !== name));
    setCart((prev) => prev.filter((i) => i.name !== name));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Custom Select with Checkbox List */}
      <div className="border rounded-lg p-3 relative">
        <h2 className="text-lg font-bold mb-2">Select Destination</h2>

        {/* Selected Display */}
        <div
          className="border border-gray-300 rounded p-3 flex justify-between items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="text-gray-600">
            {selectedNames.length > 0
              ? `${selectedNames.length} selected`
              : "Select destinations"}
          </span>
          <span className="ml-2">▾</span>
        </div>

        {/* Dropdown List */}
        {open && (
          <div className="absolute mt-1 w-full border border-gray-300 bg-white rounded shadow-lg z-10 max-h-60 overflow-auto">
            {allDestinations.map((dest) => (
              <div
                key={dest.name}
                onClick={() => handleSelect(dest)}
                className={`flex items-center p-3 cursor-pointer hover:bg-gray-100 ${
                  selectedNames.includes(dest.name) ? "bg-blue-50" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedNames.includes(dest.name)}
                  readOnly
                  className="mr-3"
                />
                <span>
                  {dest.name} - ${dest.price}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cart */}
      <div className="p-4 border border-gray-300 rounded bg-white">
        <h2 className="text-xl font-bold mb-2">🏞️ Your Choice</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">your choice is empty</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200">
              {cart.map((item) => (
                <li
                  key={item.name}
                  className="flex justify-between items-center py-2"
                >
                  <span>
                    {item.name} - ${item.price}
                  </span>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={() => removeFromCart(item.name)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p className="font-bold mt-3">Total: ${totalPrice}</p>
            <button
              className="mt-3 w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={() =>
                navigate("/payment", { state: { cart, totalPrice } })
              }
            >
              Proceed to Payment
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default DropZone;
