import React from "react";
import OfferBanner from "./OfferBanner";
import Bannerimg from "../helper/bannerImg";
import FoodImg from "../helper/FoodImg";
import UserData from "../helper/userData";
import FoodCard from "./FoodCard";
const landingpage = () => {
  return (
    <div>
      <OfferBanner BannerAndFoodData={Bannerimg} titleData={"Best offers for you"}/>
      <OfferBanner BannerAndFoodData={FoodImg} style={{ imageSize: "110px", important: true }} titleData={`${UserData.firstName}, what's on your mind?`}/>
      <FoodCard/>
    </div>
  );
};

export default landingpage;
