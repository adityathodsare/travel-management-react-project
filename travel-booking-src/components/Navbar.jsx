import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Travel Management</h1>
      <div>
        <Link
          to="/contact"
          className="mr-4 text-yellow-400 hover:text-yellow-600"
        >
          connect us
        </Link>
        <Link to="/" className="mr-4 text-yellow-400 hover:text-yellow-600">
          About
        </Link>
        <Link
          to="/tours"
          className="mr-4 text-yellow-400 hover:text-yellow-600"
        >
          tours
        </Link>
        <Link to="/history" className="text-yellow-400 hover:text-yellow-600">
          History
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
