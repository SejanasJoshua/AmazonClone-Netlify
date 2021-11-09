import React, { useEffect } from "react";
import "./Checkout.css";
import banner from "../images/bannerAd2.jpg";
import checkout1 from "../images/checkout1.png";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  // let price =
  useEffect(() => {
    document.title = "Amazon Clone Shopping Cart";
  }, []);
  return (
    <>
      <a href="https://www.primevideo.com/" target="_blank">
        <img src={banner} alt="Banner" className="banner" />
      </a>
      <div className="checkout">
        <div className="checkout_left">
          <div className="checkout_title">
            {basket?.length > 0 ? (
              <h2>Shopping Cart</h2>
            ) : (
              <h2>Shopping Cart is Empty</h2>
            )}
            <div className="deselect">
              {basket?.length > 0 ? (
                <a>Deselect all items</a>
              ) : (
                <a>Shop today's deals</a>
              )}
            </div>
          </div>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
        {basket?.length > 0 ? (
          <div className="checkout_right">
            <div className="checkout1">
              <img className="img_checkout" src={checkout1} alt="" />
            </div>
            <div className="subtotal">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p>
                      Subtotal ({basket?.length} items):{" "}
                      <strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift">
                      <input type="checkbox" />
                      This order contains a gift
                    </small>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                thousandSpacing={"2s"}
                prefix={"₹"}
              />
              <button>Proceed to Buy</button>
            </div>
          </div>
        ) : (
          <div className="checkout_right">
            <div className="subtotal">
              <p>
                The price and availability of items at Amazon.in are subject to
                change. The shopping cart is a temporary place to store a list
                of your items and reflects each item's most recent price. Do you
                have a promotional code? We'll ask you to enter your claim code
                when it's time to pay.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
