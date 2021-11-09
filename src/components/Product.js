import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";
import CurrencyFormat from "react-currency-format";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <>
      <div className="product" key={id}>
        <div className="product_info">
          <p>{title}</p>
          <p className="product_price">
            <strong>
              <CurrencyFormat
                decimalScale={2}
                value={price}
                displayType={"text"}
                thousandSeparator={true}
                thousandSpacing={"2s"}
                prefix={"₹"}
              />
            </strong>
          </p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
        <img src={image} alt={title} />
        <button onClick={addToBasket}>Add to Cart</button>
      </div>
    </>
  );
};

export default Product;
