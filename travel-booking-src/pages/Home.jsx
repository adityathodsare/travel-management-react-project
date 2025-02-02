import React, { useState } from "react";
import DestinationCard from "../components/DestinationCard";

const Home = () => {
  const cities = [
    "Pune",
    "Mumbai",
    "Delhi",
    "Goa",
    "Chennai",
    "Bangalore",
    "Kolkata",
    "Hyderabad",
    "Jaipur",
    "Surat",
    "Agra",
    "Indore",
    "Nagpur",
    "Lucknow",
    "Bhopal",
  ];

  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [price, setPrice] = useState(null);
  const [bookingAvailable, setBookingAvailable] = useState(true);
  const [bookingMessage, setBookingMessage] = useState("");
  const [loading, setLoading] = useState(false); // State for loading

  const [destinations] = useState([
    {
      from: "Pune",
      to: "Mumbai",
      price: 500,
      hotel: "Taj Group",
      travelDate: "2025-02-15",
      description: "A quick trip to Mumbai to explore the city.",
    },
    {
      from: "Delhi",
      to: "Goa",
      price: 2500,
      hotel: "Oberoi Hotels",
      travelDate: "2025-02-20",
      description: "A relaxing holiday in Goa with beautiful beaches.",
    },
    {
      from: "Chennai",
      to: "Bangalore",
      price: 800,
      hotel: "Radisson Blu",
      travelDate: "2025-02-18",
      description: "A business trip to Bangalore with vibrant tech vibes.",
    },
    {
      from: "Kolkata",
      to: "Hyderabad",
      price: 1500,
      hotel: "ITC Hotels",
      travelDate: "2025-03-01",
      description: "A cultural exchange from Kolkata to Hyderabad.",
    },
    {
      from: "Jaipur",
      to: "Surat",
      price: 1200,
      hotel: "Marriott Hotels",
      travelDate: "2025-02-25",
      description: "A beautiful journey from Jaipur to Surat.",
    },
    {
      from: "Agra",
      to: "Delhi",
      price: 1000,
      hotel: "The Leela",
      travelDate: "2025-03-05",
      description: "A scenic route from Agra to Delhi to explore history.",
    },
    {
      from: "Indore",
      to: "Nagpur",
      price: 800,
      hotel: "Hyatt Hotels",
      travelDate: "2025-03-10",
      description: "A short journey from Indore to Nagpur.",
    },
    {
      from: "Lucknow",
      to: "Bhopal",
      price: 950,
      hotel: "Holiday Inn",
      travelDate: "2025-03-12",
      description: "A calm and peaceful journey from Lucknow to Bhopal.",
    },
    {
      from: "Mumbai",
      to: "Chennai",
      price: 2000,
      hotel: "Hilton Hotels",
      travelDate: "2025-02-28",
      description: "A luxurious journey from Mumbai to Chennai.",
    },
    {
      from: "Bangalore",
      to: "Hyderabad",
      price: 1300,
      hotel: "Accor Hotels",
      travelDate: "2025-03-15",
      description: "Tech meets culture in this Bangalore to Hyderabad route.",
    },
    {
      from: "Nagpur",
      to: "Lucknow",
      price: 1100,
      hotel: "ITC Maurya",
      travelDate: "2025-03-20",
      description: "Travel from Nagpur to Lucknow with beautiful landscapes.",
    },
    {
      from: "Surat",
      to: "Jaipur",
      price: 1300,
      hotel: "Radisson Blu",
      travelDate: "2025-03-22",
      description: "Explore Surat to Jaipur's historical grandeur.",
    },
    {
      from: "Delhi",
      to: "Mumbai",
      price: 2200,
      hotel: "Taj Mahal Palace",
      travelDate: "2025-03-25",
      description: "A high-speed journey from Delhi to Mumbai.",
    },
    {
      from: "Chennai",
      to: "Delhi",
      price: 2300,
      hotel: "The Oberoi",
      travelDate: "2025-04-01",
      description: "A wonderful travel experience from Chennai to Delhi.",
    },
  ]);

  const handleBooking = (destination) => {
    setLoading(true); // Start loading
    let history = JSON.parse(localStorage.getItem("history")) || [];
    history.push(destination);
    localStorage.setItem("history", JSON.stringify(history));
    setBookingMessage(
      "Thank you for your booking. We will inform you about the travel plan via email shortly."
    );
    setLoading(false); // Stop loading
    alert("Booking Confirmed!");
  };

  const handleFromChange = (e) => {
    setFromCity(e.target.value);
    updatePrice(e.target.value, toCity);
  };

  const handleToChange = (e) => {
    setToCity(e.target.value);
    updatePrice(fromCity, e.target.value);
  };

  const updatePrice = (from, to) => {
    const destination = destinations.find(
      (d) => d.from === from && d.to === to
    );
    if (destination) {
      setPrice(destination.price);
      setBookingAvailable(true); // If a match is found
    } else {
      setPrice(null);
      setBookingAvailable(false); // If no match is found
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white">
      <div className="mt-6 space-y-4">
        <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
          <h1 className="text-4xl font-extrabold text-center text-white">
            Available Tours
          </h1>
        </nav>
        <div className="flex items-center justify-center space-x-4">
          <label className="text-lg">From:</label>
          <select
            value={fromCity}
            onChange={handleFromChange}
            className="p-3 bg-gray-800 border-2 border-gray-600 rounded-md text-white"
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          <label className="text-lg">To:</label>
          <select
            value={toCity}
            onChange={handleToChange}
            className="p-3 bg-gray-800 border-2 border-gray-600 rounded-md text-white"
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {price && (
          <p className="text-center text-lg text-green-400 mt-4">
            Price: ₹{price}
          </p>
        )}

        {!bookingAvailable && fromCity && toCity && (
          <p className="text-center text-red-500 mt-4">
            Booking not available for this route.
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {destinations.map((dest) => (
          <div
            key={dest.from + dest.to}
            className="border-2 border-gray-700 p-6 rounded-lg shadow-lg bg-gray-800 text-white hover:scale-105 transition-transform"
          >
            <h2 className="text-2xl font-semibold text-neon">
              {dest.from} → {dest.to}
            </h2>
            <p className="text-gray-300 mt-2">{dest.description}</p>
            <p className="text-gray-400 mt-2">Hotel: {dest.hotel}</p>
            <p className="text-gray-400 mt-1">Travel Date: {dest.travelDate}</p>
            {fromCity &&
              toCity &&
              price &&
              bookingAvailable &&
              fromCity === dest.from &&
              toCity === dest.to && (
                <button
                  onClick={() => handleBooking(dest)}
                  className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-md hover:bg-blue-500"
                  disabled={loading}
                >
                  {loading ? "Booking..." : "Book Now"}
                </button>
              )}
          </div>
        ))}
      </div>

      {bookingMessage && (
        <p className="mt-6 text-center text-green-400">{bookingMessage}</p>
      )}
    </div>
  );
};

export default Home;
