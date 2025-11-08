import React from "react";
import { useLocation } from "react-router-dom";
import { Destination } from "../../../pages/Destination";

interface PaymentState {
  cart: Destination[];
  totalPrice: number;
}

const PaymentPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as PaymentState | undefined;

  if (!state || state.cart.length === 0) {
    return <p>Payment</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h2 className="text-2xl font-bold">Payment</h2>
      <ul className="divide-y divide-gray-200">
        {state.cart.map((item) => (
          <li key={item.name} className="py-2 flex justify-between">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <p className="font-bold">Total: ${state.totalPrice}</p>

      <div className="space-y-2 mt-4">
        <p className="font-semibold">Pay via:</p>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Ethiopian Commercial Bank
        </button>
        <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
          Telebirr
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
