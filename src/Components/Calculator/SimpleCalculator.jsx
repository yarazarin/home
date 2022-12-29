import React, { Component } from "react";
import "./SimpleCalculator.css";

import Result from "./Result";
import Keypad from "./Keypad";

class Calculator extends Component {
  state = {
    result: "",
  };

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div className="container-calc">
        <div>
          <div className="calculator-body">
            <Result result={this.state.result} />
            <Keypad onClick={this.onClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
