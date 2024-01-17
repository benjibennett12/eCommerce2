import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Store from './components/Pages/Store';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Header from './components/Assets/Header/Header';
import Footer from './components/Assets/Footer/Footer';
import './Header.css';
import './Footer.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

