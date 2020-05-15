import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, CartPage } from "../pages";
import "./app.css";
import HeaderStore from "../header-store";
import ShoppingCartTable from "../shopping-cart-table";
const App = () => {
  return (
    <main role="main" className="container">
      <HeaderStore numItems={5} sum={200} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} exact />
      </Switch>
      <ShoppingCartTable />
    </main>
  );
};
export default App;
