import React from "react";
import "./header-store.css";
import { Link } from "react-router-dom";

const HeaderStore = ({ numItems, sum }) => {
  return (
    <header className="header-store row">
      <Link to="/" className="logo text-dark">
        ReStore
      </Link>
      <Link to="/cart" className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${sum})
      </Link>
    </header>
  );
};
export default HeaderStore;
