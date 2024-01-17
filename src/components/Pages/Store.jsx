import React, { useEffect, useState } from 'react';
import '/Users/benjibennett/E-commerce Part 2/ecommerce2/src/components/Pages/Store.css';
import ProductVideo from '/Users/benjibennett/E-commerce Part 2/ecommerce2/src/components/Assets/Images/Desktop.mp4';

const Store = (props) => {
    
    return (
        <div className='product'>
        <img src={props.image} alt="" width="463px" height="748px" />
        <div className='product-details'>
          <span>{props.name}</span>
          <span>{props.description}</span>
          <span>{props.price}</span>
          <span>{props.type}</span>
        </div>
      </div>
    );
  };

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/Products")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div className='product-video'>
        <video autoPlay muted loop>
          <source src={ProductVideo} type="video/mp4" />
        </video>
      </div>
      <div className="product-container">
        {data.map((product) => (
          <Store
            key={product.idProducts}
            name={product.name}
            price={product.price}
            image={product.Image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
