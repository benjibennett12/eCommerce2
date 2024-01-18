import React, { useEffect, useState } from 'react';
import '/Users/benjibennett/E-commerce Part 2/ecommerce2/src/components/Pages/Store.css';
import ProductVideo from '/Users/benjibennett/E-commerce Part 2/ecommerce2/src/components/Assets/Images/Desktop.mp4';

const Store = (props) => {
  return (
    <div className='product'>
      <img src={props.image} alt="" width="403px" height="648px" />
      <img className='hover-image' src={props.image2} alt="" width="403px" height="648px" />
      <div className='product-details'>
        <span>{props.name}</span>
        <span>${props.price}</span>
      </div>
    </div>
  );
};

const ProductList = () => {
  const [data, setData] = useState([]);
  const [selectedType, setSelectedType] = useState('');  //this handles the selectedType in my database
  const [selectedSort, setSelectedSort] = useState('');
  

  useEffect(() => {
    fetch("http://localhost:8000/Products")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  const handleTypeChange = (event) => {  //event.target  gives you the element that triggered the event and value retrieves the value of that element
    setSelectedType(event.target.value);
  };

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  }

  const filteredData = selectedType //this will be used to have a selectedType from my dropdown and based off the selectedType will create a new array of my products based off the selectedType
    ? data.filter(product => product.type === selectedType)
    : data;

    const sortedData = selectedSort // taking the data from the fetch request and based off the selectedSort will sort the brand of the products in my website
    ? data.sort((a, b) => {
      if (selectedSort === 'Low to High'){
        return a.price - b.price;
      } else if (selectedSort === 'High to Low') {
        return b.price - a.price;
      } else {
        return 0;
      }
    })
    : data;

  return (
    <div>
      <div className='product-video'>
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
          <Store
            key={product.idProducts}
            name={product.name}
            price={product.price}
            image={product.Image}
            image2={product.image2}
          />
        ))}
      </div>
      {/* <div className="product-container">
        {sortedData.map((product) => (
          <Store
            key={product.idProducts}
            name={product.name}
            price={product.price}
            image={product.Image}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ProductList;