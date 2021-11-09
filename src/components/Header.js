import React from "react";
import "./Header.css";
// import amazonLogo from "../images/amazonLogo.png";
import amazonLogo from "../images/amazonLogo.png";
import SearchIcon from "@mui/icons-material/Search.js";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          //src="https://johnandadam.com/wp-content/uploads/2020/08/amazon_PNG25.png"
          src={amazonLogo}
          alt="amazon-logo"
        />
      </Link>
      <div className="header_option">
        <span className="header_optionLineOne">Hello</span>
        <span className="header_optionLineTwo">Select your Address</span>
      </div>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_cart">
            <ShoppingCartIcon className="" />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
