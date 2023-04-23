import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import todos from "./redux";
import logger from "redux-logger";
import myLogger from "./middlewares/logger";
import counterSlice from "./redux-toolkit";
import { configureStore } from "@reduxjs/toolkit";

//redux-toolkit
// export const store = configureStore({
//   reducer: counterSlice,
//   middleware: [logger],
// });

//redux
const store = createStore(todos, applyMiddleware(logger)); // 여러개의 미들웨어를 적용

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
