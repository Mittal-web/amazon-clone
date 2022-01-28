import React from "react";
import "./Home.css";
import Product from "./Product";
// import StarIcon from "@mui/icons-material/Star";
function Home() {
  //   const stars = [<StarIcon/>, <StarIcon/>, <StarIcon/>]
  //   const productInfo = {
  //     title: "The lean startup",
  //     price: "29.99",
  //     image: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg"
  //     // rating: {5}
  //   };
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://t3.ftcdn.net/jpg/01/17/33/22/360_F_117332203_ekwDZkViF6M3itApEFRIH4844XjJ7zEb.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            // brand = {productInfo}
            title="The Psychology of Money"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg"
            rating={4}
            id={42332432}
          />
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg"
            title="Rich Dad Poor Dad"
            price={99.99}
            rating={5}
            id={23423454}
          />
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/51QTTApN-XL._SX324_BO1,204,203,200_.jpg"
            title="The Power of your Subconscious Mind"
            price={49.99}
            rating={5}
            id={23154654}
          />
        </div>

        <div className="home__row">
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/61cVNCxwLXL.jpg"
            title="Fear not be Strong"
            price={59.99}
            rating={4}
            id={42356454}
          />
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/61MLInWDeJL.jpg"
            title="How to Talk to Anyone"
            price={69.99}
            rating={3}
            id={23154334}
          />
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/61HR8O4T+bL.jpg"
            title="Train Your Brain"
            price={79.99}
            rating={2}
            id={23154365}
          />
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/612QivHiwzL.jpg"
            title="The Miracle of Your Mind"
            price={89.99}
            rating={5}
            id={32456498}
          />
        </div>

        <div className="home__row">
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/81MArWaiw1L.jpg"
            title="The Secret"
            price={99.99}
            rating={4}
            id={32443543}
          />
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/413-sS7Rv6L._SX311_BO1,204,203,200_.jpg"
            title="The Magical Book"
            price={89.99}
            rating={1}
            id={32445343}
          />
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/71tbalAHYCL.jpg"
            title="IKIGAI"
            price={99.99}
            rating={4}
            id={34256476}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
