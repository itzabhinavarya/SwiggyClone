import React, { useEffect, useState } from "react";
import FoodData from "../helper/FoodData";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const [data, setData] = useState([]);
  const [update, isUpdate] = useState(false);

  useEffect(() => {
    // Retrieve cart data from local storage
    const cartFromStorage = JSON.parse(localStorage.getItem("cart")) || [];

    // Map cart data to corresponding objects in FoodData array
    const cartItems = cartFromStorage.map((index) => {
      return FoodData[index];
    });

    setData(cartItems);
  }, [isUpdate, update]);

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    isUpdate(true);
  };

  const HandleCheckout = () => {
    const cartFromStorage = JSON.parse(localStorage.getItem("cart")) || [];
    localStorage.setItem("order", JSON.stringify(cartFromStorage));
    localStorage.removeItem("cart");
    isUpdate(true);
  };

  return (
    <>
      <div className="px-4" style={{ marginTop: "5rem" }}>
        <div>
          <div>
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ marginTop: "6rem", width: "100%" }}
            >
              <h2>My Cart</h2>
              <button className="btn btn-danger" onClick={handleClearCart}>
                Remove All
              </button>
            </div>
            {data.length > 0 ? (
              <>
                <div className="row row-cols-sm-2 row-cols-md-2 row-cols-lg-4 food-card">
                  {data?.map((value, index) => (
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
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  style={{ width: "100%", marginTop: "2rem" }}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Link to="/orderSuccess">
                    <button class="btn btn-success" onClick={HandleCheckout}>
                      Checkout
                    </button>
                  </Link>
                </div>
              </>
            ) : (
              <div className="d-flex align-items-center justify-content-center">
                <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
                  Cart is Empty. Shop Now
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
