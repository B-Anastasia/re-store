import React from "react";
import "./header-store.css";

const HeaderStore = ({ numItems, sum }) => {
  return (
    <header className="header-store row">
      <a href="#" className="logo text-dark">
        ReStore
      </a>
      <a className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${sum})
      </a>
    </header>
  );
};
export default HeaderStore;
