import React from "react";
import "./BlueCalculatorBTN.css";

const BlueCalculatorBTN = props => {
  return (
    <button
      className="button-style"
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </button>
  );
};

export default BlueCalculatorBTN;
