import React from "react";
import sort from "../assets/aside/sort.png";
import filter from "../assets/aside/filter.png";
import quantity from "../assets/aside/quantity.png";

function Aside() {
  return (
    <div className="aside">
      <div className="aside_list_1">
        <span className="sort">
          <img src={sort} alt="sort" />
          <p>Sort</p>
        </span>
        <ul className="list_1">
          <a className="first" href="">
            <li>Featured</li>
          </a>
          <a href="">
            <li>New Arrivals</li>
          </a>
          <a href="">
            <li>Discount</li>
          </a>
          <a href="">
            <li>Price (Highest first)</li>
          </a>
          <a href="">
            <li>Price (Lowest first)</li>
          </a>
        </ul>
      </div>
      <div className="aside_list_1">
        <span className="filter">
          <img src={filter} alt="filter" />
          <p>Filters</p>
        </span>
        <ul className="list_1">
          <a className="first" href="">
            <li>All Products</li>
          </a>
          <a href="">
            <li>Natural Insecticide</li>
          </a>
          <a href="">
            <li>Plant Growth Promoters</li>
          </a>
          <a href="">
            <li>Fertilizers</li>
          </a>
          <a href="">
            <li>Plant Potting Mix</li>
          </a>
          <a href="">
            <li>Garden Tools & Accessories</li>
          </a>
        </ul>
      </div>
      <div className="aside_list_1">
        <span className="quantity">
          <img src={quantity} alt="quantity" />
          <p>Quantity</p>
        </span>
        <ul className="list_1">
          <a className="first" href="">
            <li>250 ml/g</li>
          </a>
          <a href="">
            <li>500 ml/g</li>
          </a>
          <a href="">
            <li>1 Litre/Kg</li>
          </a>
          <a href="">
            <li>10 Kg</li>
          </a>
          <a href="">
            <li>15 Kg</li>
          </a>
          <a href="">
            <li>20 Kg</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Aside;
