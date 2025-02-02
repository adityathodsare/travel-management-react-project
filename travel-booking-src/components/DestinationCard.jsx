import React from "react";

const DestinationCard = ({ destination, onBook }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold">
        {destination.from} → {destination.to}
      </h2>
      <p className="text-gray-700">Price: ₹{destination.price}</p>
      <button
        onClick={() => onBook(destination)}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
      >
        Book Now
      </button>
    </div>
  );
};

export default DestinationCard;
