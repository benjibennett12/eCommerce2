import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header({
  activeSlideIndex,
  activePage,
  cartItems,
  setCartItems,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setCartOpen(!isCartOpen);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };

  const deleteTask = (id) => {
    const updatedList = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedList);
    console.log(id);
  };

  let logoStyle = "";
  if (activePage === "home") {
    console.log("activeSlideIndex:", activeSlideIndex);
    switch (activeSlideIndex) {
      case 0:
      case 1:
      case 2:
      case 3:
        logoStyle = "white";
        break;
      case 4:
        logoStyle = "black";
        break;
      default:
        logoStyle = "white";
    }
  } else {
    console.log("activePage:", activePage);
    switch (activePage) {
      case "About":
        logoStyle = "black";
        break;
      case "Store":
        logoStyle = "black";
        break;
      case "Contact":
        logoStyle = "black";
        break;
      default:
        logoStyle = "black";
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
          <div className="logo">
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
              {/* <div className="search-container">
                <input id="user-input" type="text" placeholder="..." />
                <a href="Store.jsx" className="search-link">
                  Search
                </a>
              </div> */}
              <button className="btn1A">Sign Up</button>
              <button className="btn2A">Log In</button>
              <button
                variant="outline-primary"
                className="shoppingCart"
                onClick={handleCartClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                  <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                </svg>

                <div
                  className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                  style={{
                    color: "white",
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "translate(25%, 25%)",
                  }}
                >
                  {cartItems.length}
                </div>
              </button>
            </form>
          </div>
          {isCartOpen && (
            <div className="cart-overlay">
              <div className="cart-header">Shopping Cart</div>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-name">{item.name}</div>
                    <div className="item-price">${item.price}</div>
                    <button onClick={() => deleteTask(item.id)}>X</button>
                  </div>
                ))}
              </div>
              <div className="total-amount">Total:{calculateTotal}</div>
              <button
                className="close-button"
                onClick={() => setCartOpen(false)}
              >
                X
              </button>
            </div>
          )}
        </nav>
      </header>

      <style jsx>{`
        html,
        body {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          font-family: "Courier New", Courier, monospace;
          box-sizing: border-box;
          font-family: "optibodoni-antiquaregular", sans-serif;
        }
        nav {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          padding: 8px 0;
          z-index: 2;
          background-color: ${activePage === "home" ? "transparent" : "white"};
        }

        #highlight {
          font-weight: bolder;
          font-size: 90px;
          font-family: OPTI;
        }

        .logo {
          margin-left: 190px;
        }
        .buttons {
          margin-right: 150px;
        }

        .logo a {
          text-decoration: none;
          margin-left: 15px;
          font-family: OPTI;
          color: ${logoStyle};
        }
        .logo h1 {
          margin: 0;
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

        .btn1A,
        .btn2A {
          padding: 10px 20px;
          margin: 0 10px;
          background-color: #36454f;
          border: 2px solid #fff;
          border-radius: 5px;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .btn1A:hover,
        .btn2A:hover {
          background-color: ;
          color: #fff;
        }

        .shoppingCart {
          width: 3rem;
          height: 3rem;
          position: relative;
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

        .buttons btn1A,
        .buttons btn2A {
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
        .cart-overlay {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 300px;
          background-color: white;
          box-shadow: -4px 0 8px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          padding: 20px;
          display: flex;
          flex-direction: column;
        }

        .cart-header {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .cart-items {
          flex-grow: 1;
          overflow-y: auto;
        }

        .cart-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .item-name {
          flex-grow: 1;
        }

        .item-price {
          margin-left: 10px;
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
            right: 0%;
          }
          .hamburger-button {
            display: block;
            cursor: pointer;
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 1000;
            font-size: xx-large;
            color: black;
          }

          .shoppingCart {
            width: 3rem;
            height: 3rem;
            position: absolute;
            top: 20px;
            right: 20px;
          }

          .link-list {
            color: #b8b7ad;
            padding: 0.8em;
            list-style: none;
            margin: 0;
          }

          .link-list a {
            display: block;
            padding: 0.5em 0;
            text-decoration: none;
            color: #b8b7ad;
            transition: color 0.3s ease;
          }

          .link-list a:hover {
            color: #fff;
          }

          .bm-menu {
            background: #333;
            padding: 2em;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            left: 0;
          }

          .bm-item {
            margin-bottom: 1em;
          }

          .bm-cross-button {
            position: fixed;
            top: 20px;
            right: 20px;
            cursor: pointer;
            z-index: 1001;
          }

          .bm-cross {
            background: #fff;
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
