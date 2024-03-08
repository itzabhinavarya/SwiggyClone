import React, { useState, useEffect } from "react";
import "./FoodCard.css";
// import "./search.css";
import FoodData from "../helper/FoodData";
import AddToCart from "./AddToCart";

function FilterData(searchText, FoodData) {
  const words = searchText.toLowerCase().split(" ");
  const formattedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const finalSearch = formattedWords.join(" ");
  var data = FoodData.filter((FoodData) => FoodData.name.includes(finalSearch));
  return data;
}

const FoodCard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFoodData, setSearchFoodData] = useState([]);
  // const [item, setItem] = useState({id});
  const [item, setItem] = useState([]);

  // Update filtered data when search term changes
  useEffect(() => {
    const filteredData = FilterData(searchTerm, FoodData);
    setSearchFoodData(filteredData);
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const HandleCart = (id) => {
    // Update state
    setItem((prev) => [...prev, id]); // Push the new id to the array

    // Get the current cart from localStorage, or an empty array if it doesn't exist
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new id to the current cart array
    currentCart.push(id);

    // Store the updated cart array in localStorage
    localStorage.setItem("cart", JSON.stringify(currentCart));
  };


  return (
    <>
      <div className="hero-food-card">
        <div className="food-search d-flex gap-3">
          <input
            type="text"
            className="form-control search-box"
            placeholder="Search For Food"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="btn btn-dark">Search</button>
        </div>
        <div className="food-card-title">
          <h3>Trending Foods</h3>
        </div>
        <div className="row row-cols-sm-2 row-cols-md-2 row-cols-lg-4 food-card">
          {searchFoodData.map((value, index) => (
            <div className="col-sm food" key={index}>
              <div className="food-img">
                <img src={value.img} alt="" />
                <div className="food-offer">
                  <p>{value.offer}</p>
                </div>
              </div>
              <div className="food-name">
                <p>{value.name}</p>
              </div>
              <div className="food-rating">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  role="img"
                  aria-hidden="true"
                  strokeColor="rgba(2, 6, 12, 0.92)"
                  fillColor="rgba(2, 6, 12, 0.92)"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                  ></circle>
                  <path
                    d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                    fill="white"
                  ></path>
                  <defs>
                    <linearGradient
                      id="StoreRating20_svg__paint0_linear_32982_71567"
                      x1="10"
                      y1="1"
                      x2="10"
                      y2="19"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#21973B"></stop>
                      <stop offset="1" stop-color="#128540"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <p>{value.star}</p>
              </div>
              <div className="food-category">
                <p className="text-muted">{value.cusins}</p>
              </div>
              <div className="restaurant-name d-flex align-items-center justify-content-between">
                <p className="text-muted">{value.restaurant}</p>
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={() => HandleCart(index)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodCard;
