import React, { useEffect, useState } from "react";

const History = () => {
  const [history, setHistory] = useState([]);
  const [bookingMessage, setBookingMessage] = useState("");

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(storedHistory);
  }, []);

  const handleBookingConfirmation = () => {
    setBookingMessage("We will inform the plan shortly using email.");
  };

  const handleCancelBooking = (index) => {
    const updatedHistory = history.filter((_, i) => i !== index);
    setHistory(updatedHistory);
    localStorage.setItem("history", JSON.stringify(updatedHistory));
    setBookingMessage("Your booking has been canceled.");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <div className="p-6 flex-grow">
        <h1 className="text-2xl font-bold text-center mb-6">Booking History</h1>
        {history.length > 0 ? (
          <ul className="mt-4">
            {history.map((item, index) => (
              <li
                key={index}
                className="border p-4 rounded-lg shadow-lg my-4 bg-gray-800 hover:bg-gray-700 transition-all"
              >
                <div className="text-lg font-semibold">
                  {item.from} → {item.to} - ₹{item.price}
                </div>
                <p className="text-sm text-gray-400">Hotel: {item.hotel}</p>
                <p className="text-sm text-gray-400">
                  Travel Date: {item.travelDate}
                </p>
                <div className="mt-4 flex gap-4">
                  <button
                    onClick={handleBookingConfirmation}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    Confirm Booking Plan
                  </button>
                  <button
                    onClick={() => handleCancelBooking(index)}
                    className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Cancel Booking
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600 mt-4">No bookings found.</p>
        )}
        {bookingMessage && (
          <p className="mt-4 text-center text-green-500">{bookingMessage}</p>
        )}
      </div>

      <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
        <div className="text-center">
          <p className="text-sm">Travel Management &copy; 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default History;
