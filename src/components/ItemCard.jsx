import React, { useState } from "react";
import favourite from "../assets/shop/add_favourite.png";
import rupee from "../assets/shop/rupee.png";
import cart from "../assets/shop/cart.png";
import product_1 from "../assets/shop/product_1.png";
import product_2 from "../assets/shop/product_2.png";
import product_3 from "../assets/shop/product_3.png";

function ItemCard() {
  const products = [
    {
      quantity: "5kg",
      name: "Cocopeat",
      price: 799,
      image: product_1,
    },
    {
      quantity: "250ml",
      name: "Epsom Salt",
      price: 799,
      image: product_2,
    },
    {
      quantity: "250ml",
      name: "Vermicompost",
      price: 799,
      image: product_3,
    },
    {
      quantity: "250ml",
      name: "Cocopeat",
      price: 799,
      image: product_1,
    },
    {
      quantity: "250ml",
      name: "Epsom Salt",
      price: 799,
      image: product_2,
    },
    {
      quantity: "250ml",
      name: "Vermicompost",
      price: 799,
      image: product_3,
    },
    {
      quantity: "250ml",
      name: "Cocopeat",
      price: 799,
      image: product_1,
    },
    {
      quantity: "250ml",
      name: "Epsom Salt",
      price: 799,
      image: product_2,
    },
    {
      quantity: "250ml",
      name: "Vermicompost",
      price: 799,
      image: product_3,
    },
    {
      quantity: "250ml",
      name: "Cocopeat",
      price: 799,
      image: product_1,
    },
    {
      quantity: "250ml",
      name: "Epsom Salt",
      price: 799,
      image: product_2,
    },
    {
      quantity: "250ml",
      name: "Vermicompost",
      price: 799,
      image: product_3,
    },
  ];

  const handleAddCart = () => {
    alert("Item Added to cart");
  };

  const handleFavourite = () => {
    alert("Item Added to Favourite List");
  };

  return (
    <div className="item">
      <div className="main_item">
        {products.map((item, index) => (
          <div key={index} className="item_card">
            <div>
              <div className="head">
                <img
                  onClick={handleFavourite}
                  src={favourite}
                  className="favourite"
                  alt="Favourite"
                />
                <p
                  style={{
                    fontSize: "8px",
                    backgroundColor: "#81BB3F",
                    padding: "5px 10px 3px 10px ",
                    borderRadius: "10px",
                    color: "white",
                  }}
                >
                  {item.quantity}{" "}
                </p>
              </div>
              <div className="body">
                <img
                  style={{
                    width: "170px",
                    height: "180px",
                    marginLeft: "15px",
                  }}
                  src={item.image}
                  alt={item.name}
                />
                <p
                  style={{
                    color: "#81BB3F",
                    position: "relative",
                    left: "60px",
                    fontSize: "18px",
                    top: "-10px",
                  }}
                >
                  {item.name}
                </p>
                <span
                  style={{
                    fontSize: "25px",
                    fontFamily: "product sans",
                    position: "relative",
                    top: "-20px",
                    left: "75px",
                  }}
                >
                  <img
                    style={{
                      width: "6px",
                      height: "8px",
                      position: "relative",
                      top: "-8px",
                      right: "5px",
                    }}
                    src={rupee}
                    alt="Rupee"
                  />
                  {item.price}

                  <button className="cart_btn" onClick={handleAddCart}>
                    <img
                      style={{
                        width: "18px",
                        height: "18px",
                        marginRight: "10px",
                      }}
                      src={cart}
                      alt="cart"
                    />
                    Add to cart
                  </button>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
      </div>
    </div>
  );
}

export default ItemCard;
