import React, { useEffect, useState } from "react";
import ProductVideo from "../Assets/Images/Desktop.mp4";
import ReactModal from "react-modal";

const Product = (props) => {
  return (
    <div className="product" onClick={props.onClick}>
      <img src={props.image} alt="" width="403px" height="648px" />
      <img
        className="hover-image"
        src={props.image2}
        alt=""
        width="403px"
        height="648px"
      />
      <div className="product-details">
        <div className="name&price">
          <span>{props.name}</span>
          <span>${props.price}</span>
        </div>
        <span>{props.description}</span>
      </div>
    </div>
  );
};

const Store = ({ handlePageChange, onAddToCart }) => {
  handlePageChange("Store");

  const [data, setData] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);



  const handleClickProduct = (product) => { //handles and triggers the modal for all the products from my database
    setSelectedProduct(product);
    setModalOpen(true);
  };

  useEffect(() => { //Handles my fetch request from the API I made for my database information
    fetch("https://ecomv2-3ycx.onrender.com/Products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);


  const handleTypeChange = (event) => {
    //event.target  gives you the element that triggered the event and value retrieves the value of that element
    setSelectedType(event.target.value);
  };

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  const handleAddToCart = (product) => {
    onAddToCart(product);
    setModalOpen(false);
  };

  const filteredData = selectedType //this will be used to have a selectedType from my dropdown and based off the selectedType will create a new array of my products based off the selectedType
    ? data.filter((product) => product.type === selectedType)
    : data;

  const sortedData = selectedSort // taking the data from the fetch request and based off the selectedSort will sort the brand of the products in my website
    ? data.sort((a, b) => {
        if (selectedSort === "Low to High") {
          return a.price - b.price;
        } else if (selectedSort === "High to Low") {
          return b.price - a.price;
        } else {
          return 0;
        }
      })
    : data;

  return (
    <div>
      <div className="product-video">
        <video autoPlay muted loop>
          <source src={ProductVideo} type="video/mp4" />
        </video>
      </div>
      <div className="product-header">
        <h1>Products</h1>
      </div>
      <div className="drop-down-menus">
        <div className="filter-menu">
          <div className="filter-title">Filter</div>
          <select id="dropdown1" onChange={handleTypeChange}>
            <option value="">All</option>
            <option value="Shoes">Shoes</option>
            <option value="Sweater">Sweater</option>
            <option value="Jacket">Jacket</option>
          </select>
        </div>
        <div className="filter-menu2">
          <div className="filter-title">Sort</div>
          <select id="dropdown1" onChange={handleSortChange}>
            <option value="">Sort</option>
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </select>
        </div>
      </div>
      <div className="product-container">
        {filteredData.map((product) => (
          <Product
            key={product.idProducts}
            name={product.name}
            price={product.price}
            image={product.Image}
            image2={product.image2}
            onClick={() => handleClickProduct(product)}
          />
        ))}
      </div>
      <div className="Modaldisplay">
        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={() => setModalOpen(false)}
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          {selectedProduct && (
            <div className="modal-container">
              <Product
                name={selectedProduct.name}
                price={selectedProduct.price}
                image={selectedProduct.Image}
                image2={selectedProduct.image2}
              />
              <div className="modal-description">
                {selectedProduct.description}
                <button
                  className="aocBtn"
                  onClick={() => handleAddToCart(selectedProduct)}
                >
                  Add to Cart
                </button>
              </div>
              <button
                className="close-button"
                onClick={() => setModalOpen(false)}
              >
                X
              </button>
            </div>
          )}
        </ReactModal>
      </div>
      <style jsx>{`
        .product-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          margin-top: 200px;
          gap: 10px;
        }

        .product {
          flex: 0 1 calc(25% - 20px);
          border: 1px solid #ddd;
          padding: 10px;
          margin: 10px;
          text-align: center;
          position: relative;
          display: inline-block;
        }

        .hover-image {
          position: absolute;
          top: 0;
          left: 2;
          opacity: 0;
          margin: 0 auto;
          transition: opacity 0.5s ease;
        }

        .product:hover .hover-image {
          opacity: 1;
        }

        .product img {
          display: block;
          margin: 0 auto;
        }

        .product-details {
          margin-top: 10px;
          color: black;
          display: flex;
        }

        .product-video {
          display: flex;
          justify-content: center;
          margin-top: 75px;
        }

        .product-video video {
          width: 1500px;
          height: 1000px;
        }

        .drop-down-menus {
          display: flex;
          justify-content: space-evenly;
          width: 100%;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
          width: 800px;
          height: 500px;
        }

        .modal-content img {
          width: 200px;
          height: 325px;
        }

        .modal-content .product-details {
          margin-top: 10px;
          color: black;
          display: flex;
          justify-content: space-between;
        }

        .modal-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
        .modal-description,
        .aocBtn {
          display: flex;
          flex-direction: column;
        }

        .aocBtn {
          margin-top: 90px;
          background-color: #4caf50;
          border: none;
          color: black;
          padding: 10px 20px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          cursor: pointer;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }

        .aocBtn:hover {
          background-color: #45a049;
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
        }
        .name&price {
          display: flex;
          flex-direction: column;
        }

        .ReactModal__Content ReactModal__Content--after-open modal-content {
        }
      `}</style>
    </div>
  );
};

export default Store;
