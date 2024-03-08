import React, { useState } from "react";
import "./navbar.css";

import { TbPercentage } from "react-icons/tb";
import { LuHelpingHand } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navClick, setNavClick] = useState(false);
  const [menu, setMenu] = useState(GiHamburgerMenu);
  return (
    <>
      <div
        className="navbar fixed-top"
        style={{ zIndex: "999", backgroundColor: "#fff" }}
      >
        <div className="logo">
          <Link to="/" className="text-black text-decoration-none">
            <h1>HappyCorner</h1>
          </Link>
        </div>
        {/*<div className="nav-links">*/}
        <div className={navClick === true ? "responsive-navbar" : "nav-links"}>
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
              <Link to="/addtocart" className="text-black text-decoration-none">
                <AiOutlineShoppingCart />
                Cart
              </Link>
            </li>
            <li>
              <Link to="/order" className="text-black text-decoration-none">
                <AiOutlineShoppingCart />
                Order
              </Link>
            </li>
          </ul>
        </div>
        <div className="hamburger">
          <GiHamburgerMenu
            size="1.6rem"
            onClick={() => {
              setNavClick(!navClick);
              // setMenu(menu === GiHamburgerMenu ? RxCross1 : GiHamburgerMenu);
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Navbar;
