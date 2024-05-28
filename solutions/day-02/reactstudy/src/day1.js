import React from "react";
import ReactDOM from "react-dom";

// Hexadecimal color generator
const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const boxStyle = {
  background: hexaColor(),
};
const HexaColor = () => <div style={boxStyle}>{hexaColor()}</div>;

const rootElement = document.getElementById("root");
// we render the App component using the ReactDOM package
ReactDOM.render(<HexaColor />, rootElement);
