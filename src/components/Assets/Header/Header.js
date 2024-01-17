import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

export default function Header({ activeSlideIndex }) {
  

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  
  const logoStyle = {
    color: activeSlideIndex === 0 ? 'white' :
           activeSlideIndex === 1 ? 'white' :
           activeSlideIndex === 2 ? 'black' :
           'black',
  };
  
  return (
    <div>
        <Menu isOpen={menuOpen} onStateChange={(state) => setMenuOpen(state.isOpen)} 
        customCrossIcon={<div className="bm-cross">&#10006;</div>} 
        crossButtonClassName="bm-cross-button"
        className='MenuClass'
        overlayClassName={ "my-class" }
        itemListClassName={ "link-list" }
        >
            <ul className="link-list">
              <li><a href="/About" className="nav-item">About Us</a></li>
              <li><a href="/Store" className="nav-item">Store</a></li>
              <li><a href="/Contact" className="nav-item">Contact Us</a></li>
              <button className="btn1">Sign Up</button>
              <button className="btn2">Log In</button>
            </ul>
            
        </Menu>

        <div className="hamburger-button" onClick={handleMenuToggle}>
          ☰
        </div>
      <header>
        <nav>
          <div className="logo" style={logoStyle}>
            <h1>
              <a href="/"><span id="highlight">M</span>onochrome</a>
            </h1>
            <div className="pages">
              <a href="/About" className="nav-item">About Us</a>
              <a href="/Store" className="nav-item">Store</a>
              <a href="/Contact" className="nav-item">Contact Us</a>
            </div>
          </div>
          <div className="buttons">
            <form id="SearchForm">
              <div className="search-container">
                <input id="user-input" type="text" placeholder="..." />
                <a href="Store.jsx" className="search-link">Search</a>
              </div>
              <button className="btn1A">Sign Up</button>
              <button className="btn2A">Log In</button>
            </form>
          </div>
        </nav>
      </header>
    </div>
  );
}

