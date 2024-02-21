import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";

/** TODO: import REDUX **/
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

/** TODO: Add REDUCERS */
const airplanes = (state = [], action) => {
  switch (action.type) {
    case "ADD_AIRPLANE":
      console.log(action.payload);
      return [...state, action.payload];
  }
  return state;
};

/** TODO: Create store */
const store = createStore(airplanes);

// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
