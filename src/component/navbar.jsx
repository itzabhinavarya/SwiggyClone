import React from "react";
import "./navbar.css";

import { TbPercentage } from "react-icons/tb";
import { LuHelpingHand } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>HappyCorner</h1>
        </div>
        <div className=" responsive-navbar">
          <ul>
            {/*<li>
            <BiSearch />
            Search
            </li>*/}
            <li>
              <TbPercentage />
              Offers
            </li>
            <li>
              <LuHelpingHand />
              Help
            </li>
            <li>
              <VscAccount />
              Account
            </li>
            <li>
              <AiOutlineShoppingCart />
              Cart
            </li>
          </ul>
        </div>
        <div className="hamburger">
          <GiHamburgerMenu size="1.6rem"/>
        </div>
      </div>
    </>
  );
};
export default navbar;
