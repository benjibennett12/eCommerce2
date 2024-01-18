import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

export default function Header({ activeSlideIndex , activePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  let logoStyle = "white";
  if (activePage === "home") {
    console.log("activeSlideIndex:", activeSlideIndex);
    switch (activeSlideIndex) {
      case 0:
      case 1:
        logoStyle = "white";
        break;
      case 2:
        logoStyle = "black";
        break;
      default:
        logoStyle = "white";
    }
  } else {
    console.log("activePage:", activePage);
    switch (activePage) {
      case "/About":
        logoStyle = "black";
        break;
      case "/Store":
        logoStyle = "black";
        break;
      case "/Contact":
        logoStyle = "black";
        break;
      default:
        logoStyle = "white";
    }
  }

  return (
    <div>
      <Menu
        isOpen={menuOpen}
        onStateChange={(state) => setMenuOpen(state.isOpen)}
        customCrossIcon={<div className="bm-cross">&#10006;</div>}
        crossButtonClassName="bm-cross-button"
        className="MenuClass"
        overlayClassName={"my-class"}
        itemListClassName={"link-list"}
      >
        <ul className="link-list">
          <li>
            <a href="/About" className="nav-item">
              About Us
            </a>
          </li>
          <li>
            <a href="/Store" className="nav-item">
              Store
            </a>
          </li>
          <li>
            <a href="/Contact" className="nav-item">
              Contact Us
            </a>
          </li>
          <button className="btn1">Sign Up</button>
          <button className="btn2">Log In</button>
        </ul>
      </Menu>

      <div className="hamburger-button" onClick={handleMenuToggle}>
        ☰
      </div>

      <header>
        <nav>
        <div className="logo" style={{ color: logoStyle }}>
            <h1>
              <a href="/">
                <span id="highlight">M</span>onochrome
              </a>
            </h1>
            <div className="pages">
              <a href="/About" className="nav-item">
                About Us
              </a>
              <a href="/Store" className="nav-item">
                Store
              </a>
              <a href="/Contact" className="nav-item">
                Contact Us
              </a>
            </div>
          </div>
          <div className="buttons">
            <form id="SearchForm">
              <div className="search-container">
                <input id="user-input" type="text" placeholder="..." />
                <a href="Store.jsx" className="search-link">
                  Search
                </a>
              </div>
              <button className="btn1A">Sign Up</button>
              <button className="btn2A">Log In</button>
            </form>
          </div>
        </nav>
      </header>

      <style jsx>{`
 html,
 body {
     width: 100%;
     height: 100%;
     margin: 0;
     padding: 0;
     font-family: 'Courier New', Courier, monospace;
     box-sizing: border-box;
     font-family: 'optibodoni-antiquaregular', sans-serif;
     
 }
 nav {
     width: 100%;
     height: 60px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     position: fixed;
     top: 0;
     padding: 8px 0;
     /* background-color: black; */
     z-index: 2;
 }
 
 #highlight {
     font-weight: bolder;
     font-size: 90px;
     font-family: OPTI;
     /* color: darkgrey; */
 }
 
 .logo a {
     text-decoration: none;
     color: ${logoStyle};
     margin-left: 15px;
     font-family: OPTI;
    }
    .logo {
      padding: 40px;
      margin-top: 16px;
      color: black;
 }
 
 
 .search-container {
     position: relative;
     display: inline-block;
     margin-right: 30px;
   }
   
   #user-input {
     padding-right: 30px; 
     padding: 5px 10px;
     background-color: transparent;
     border-color: #fff;
     border-radius: 15px;
     width: 300px;
   }
   
   .search-link {
     position: absolute;
     top: 50%;
     right: 8px;
     transform: translateY(-50%);
     text-decoration: none;
     color: #fff; 
   }
   
 
 .highlight {
     font-weight: bold;
 }
 
 
 .pages {
     display: flex;
     align-items: center;
     flex-direction: row;
 }
 
 .buttons button {
     margin: 0 10px;
     background-color: black;
     border: 2px solid #fff;
     border-radius: 5px;
     padding: 6px 12px;
     color: #fff;
     font-size: 16px;
 }
 
   
 
 .hamburger-button {
     display: none;
   }
 
   .bm-menu {
     width: 80% !important;
     height: 80% !important;
   }
 
   @media screen and (min-width: 769px) {
 
     .my-class {
         display: none;
     }
 
     .hamburger-button {
       display: none;
     }
   
     .bm-menu {
       display: none;
     }
     .bm-cross {
         display: none;
     }
   }
   @media screen and (max-width: 768px) {
     .search-container {
         position: absolute;
         right:0%;
     }
     .hamburger-button {
       display: block;
       cursor: pointer;
       position: fixed;
       top: 20px;
       left: 20px; 
       z-index: 1000; 
       font-size: xx-large;
     }
   
     .bm-menu {
         background: #333; 
         padding: 2em;
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         left: 0;
       }
 
       .link-list {
         color: #b8b7ad;
         padding: 0.8em;
         list-style: none; /* Remove default list styling */
         margin: 0; /* Remove default margin */
       }
       
       .link-list a {
         display: block;
         padding: 0.5em 0; /* Add padding to each link for spacing */
         text-decoration: none;
         color: #b8b7ad;
         transition: color 0.3s ease; /* Add a smooth color transition on hover */
       }
       
       .link-list a:hover {
         color: #fff; /* Change color on hover */
       }
   
   
     .bm-item {
       margin-bottom: 1em;
     }
 
     .bm-cross-button {
         position: fixed;
         top: 20px;
         right: 20px;
         cursor: pointer;
         z-index: 1001; /* Ensure the close button appears on top */
       }
     
       .bm-cross {
         background: #fff; /* Customize the color of the close button */
       }
   
     .logo {
       display: none;
     }
     .btn1,
     .btn2 {
         display: none;
     }
     .btn1A,
     .btn2A {
         display: none;
     }
   }
`}</style>
    </div>
  );
}

