// index.js
import React from "react";
import ReactDOM, { createRoot } from "react-dom";
import { App } from "./day27";
import { RouterProvider } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
// createRoot(rootElement).render(<RouterProvider router={router} />);
