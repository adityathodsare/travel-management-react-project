import React from "react";
import Home from "./pages/Home";
import History from "./pages/History";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/tours" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<About />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
