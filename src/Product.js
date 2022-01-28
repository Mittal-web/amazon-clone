import React from "react";
import "./product.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "./StateProvider";
function Product(props) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is the basket >>>> ", basket);
  const addToBasket = () => {
    // dispatch the  item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
        id: props.id,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <span>
                <StarIcon />
              </span>
            ))}
        </div>
      </div>

      <img className="product__image" src={props.image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
