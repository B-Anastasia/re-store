import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

import { Provider } from "react-redux";
import ErrorBoundry from "./components/error-boundry";
import BookstoreService from "./services/bookstore-service";
import { BookstoreServicePropvider } from "./components/bookstore-service-context";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServicePropvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServicePropvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
