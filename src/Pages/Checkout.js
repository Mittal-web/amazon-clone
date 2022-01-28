import React from "react";
import "./Checkout.css";

import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is new basket ",basket )
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/OlympicRangePano.jpg/2000px-OlympicRangePano.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <div className="myProduct">
            {basket.map((item) => (
              <CheckoutProduct
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                id={item.id}
              />
            ))}
          </div>
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
        </div>
      </div>
      <div className="checkout__right">
        {/* <h2>The subtotal will go here</h2> */}
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
