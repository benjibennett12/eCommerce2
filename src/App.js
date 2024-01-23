import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Store from "./components/Pages/Store";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Header from "./components/Assets/Header/Header";
import Footer from "./components/Assets/Footer/Footer";
import "./Footer.css";

function App() {
  const [activateSlide, setActiveSlide] = useState(0);
  const handleSlideChange = (slide) => {
    setActiveSlide(slide);
  };
  const [activePage, setActivePage] = useState("home");
  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const [cartItems, setCartItems] = useState([]);

  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const handleAddToCart = (product) => {
    const newItem = { ...product, id: generateUniqueId() };
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className="App">
      <Router>
        <Header
          activeSlideIndex={activateSlide}
          activePage={activePage}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
        <Routes>
          <Route
            path="/"
            element={<Home handleSlideChange={handleSlideChange} />}
          />
          <Route
            path="/About"
            element={<About handlePageChange={handlePageChange} />}
          />
          <Route
            path="/Store"
            element={
              <Store
                handlePageChange={handlePageChange}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/Contact"
            element={<Contact handlePageChange={handlePageChange} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
