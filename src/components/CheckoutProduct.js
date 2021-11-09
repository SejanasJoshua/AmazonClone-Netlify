import React from "react";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  return (
    <>
      <div className="product">
        <img className="product_image" src={image} alt={title} />
      </div>
      <div className="product_info">
        <p className="title">{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product_rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </div>
      <button>Remove from Basket</button>
    </>
  );
};

export default CheckoutProduct;
