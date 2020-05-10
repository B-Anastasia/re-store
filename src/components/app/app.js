import React from "react";
import { withBookstoreService } from "../hoc";
import { Route, Switch } from "react-router-dom";
import { HomePage, CartPage } from "../pages";

const App = ({ bookstoreService }) => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/cart" component={CartPage} exact />
    </Switch>
  );
};
export default withBookstoreService()(App);
