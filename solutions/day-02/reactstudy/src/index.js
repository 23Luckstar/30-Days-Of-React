// index.js
import React from "react";
import ReactDOM, { createRoot } from "react-dom";
// import { App } from "./day27";
import App from "./useImperativeHandle/demo2";
import { RouterProvider } from "react-router-dom";
import "./styles/index.css";

const rootElement = document.getElementById("root");
// ReactDOM.render(<Game />, rootElement);
ReactDOM.render(<App />, rootElement);
// createRoot(rootElement).render(<RouterProvider router={router} />);
