import React from "react";
import "./BlueCalculator.css";
import BlueCalculatorBTN from "./BlueCalculatorBTN";

export default function BlueCalculator() {
  const [calculation, setCalculation] = React.useState([0]);
  const [result, setResult] = React.useState(0);
  const [opera, setOpera] = React.useState(null);
  const [prevResult, setPrevResult] = React.useState(null);

  React.useEffect(() => {
    setCalculation([0]);
    setResult(0);
  }, []);

  React.useEffect(() => {
    //console.log(opera);
    if (opera != null) {
      //console.log(calculation);
      //console.log("result --- " + result);
      let itemBeforeOperator = 0;
      let itemAfterOperator = 0;
      let operatorFound = false;
      const length = calculation.length;
      for (let i = length - 1; i >= 0; i--) {
        if (calculation[i] !== "$") {
          if (opera === calculation[i]) {
            operatorFound = true;
            continue;
          }
          if (operatorFound) {
            if (result !== 0) {
              //console.log("Resultwokring")
              itemBeforeOperator = result;
            } else {
              //console.log("Not Resultwokring")
              itemBeforeOperator =
                itemBeforeOperator === 0
                  ? calculation[i]
                  : calculation[i] + itemBeforeOperator;
            }
          } else {
            itemAfterOperator =
              itemAfterOperator === 0
                ? calculation[i]
                : calculation[i] + itemAfterOperator;
          }
        } else {
          if (result !== 0) {
            //console.log("Resultwokring")
            itemBeforeOperator = result;
          }
          break;
        }
      }

      const lastItem = calculation[calculation.length - 1];
      // console.log("lastItem :: " + lastItem);
      // console.log("itemBeforeOperator :: " + itemBeforeOperator);
      // console.log("itemAfterOperator :: " + itemAfterOperator);
      if (lastItem !== opera) {
        setPrevResult(prevResult);
        let updatedResult = 0;
        switch (opera) {
          case "%":
            updatedResult = itemBeforeOperator % itemAfterOperator;
            setResult(updatedResult);
            break;
          case "/":
            updatedResult = itemBeforeOperator / itemAfterOperator;
            setResult(updatedResult);
            break;
          case "*":
            updatedResult = itemBeforeOperator * itemAfterOperator;
            setResult(updatedResult);
            break;
          case "+":
            updatedResult =
              parseInt(itemBeforeOperator) + parseInt(itemAfterOperator);
            setResult(updatedResult);
            break;
          case "-":
            updatedResult = itemBeforeOperator - itemAfterOperator;
            setResult(updatedResult);
            break;
          default:
            return;
        }
      }
    } else {
      return;
    }
  }, [opera, calculation]);

  const num_handle = (value) => {
    if (calculation.length === 1 && calculation.indexOf(0) === 0) {
      setCalculation([value]);
    } else {
      setCalculation([...calculation, value]);
    }
    //console.log("num_handle :: " + value);
  };

  const spcl_handle = (value) => {
    if (calculation.length === 1 && calculation[calculation.length - 1] === 0) {
      return;
    }
    switch (value) {
      case "C":
        setCalculation([0]);
        setResult(0);
        setOpera(null);
        return;
      case "%":
        updateCalculation("%");
        setOpera("%");
        break;
      case "/":
        updateCalculation("/");
        setOpera("/");
        break;
      case "+":
        updateCalculation("+");
        setOpera("+");
        break;
      case "-":
        updateCalculation("-");
        setOpera("-");
        break;
      case "*":
        updateCalculation("*");
        setOpera("*");
        break;
      case "del":
        if (calculation.length === 1) {
          if (result === calculation[calculation.length - 1]) {
            setCalculation([0]);
            setResult(0);
          }
        }
        const newCalculation = calculation.pop();
        if (newCalculation.length) {
          setResult(prevResult);
          setCalculation([...calculation]);
        } else {
          setCalculation([0]);
          setResult(0);
        }

        return;
      case ".":
        setCalculation([...calculation, "."]);
        return;
      case "=":
        setCalculation([result]);
        setOpera(null);
        return;
      default:
        return;
    }
  };

  const updateCalculation = (value) => {
    if (result !== 0) {
      setPrevResult(result);
      setCalculation([...calculation, "$", value]);
    } else {
      setCalculation([...calculation, value]);
    }
  };

  const showCalculation = () => {
    return calculation.filter((item) => item !== "$");
  };

  return (
    <div className="calc">
      <div className="show-calculation">
        <span className="result-calculation">{showCalculation()}</span>
        <span className="dashed-line" />
        <span className="final-result">
          {result === 0 ? <div className="box"></div> : result}
        </span>
      </div>
      <div className="button-layout">
        <BlueCalculatorBTN handleClick={(value) => spcl_handle(value)}>
          C
        </BlueCalculatorBTN>
        <BlueCalculatorBTN handleClick={(value) => spcl_handle(value)}>
          ≠
        </BlueCalculatorBTN>
        <BlueCalculatorBTN handleClick={(value) => spcl_handle(value)}>
          %
        </BlueCalculatorBTN>
        <BlueCalculatorBTN handleClick={(value) => spcl_handle(value)}>
          /
        </BlueCalculatorBTN>
        <BlueCalculatorBTN handleClick={(value) => num_handle(value)}>
          7
        </BlueCalculatorBTN>
        <BlueCalculatorBTN handleClick={(value) => num_handle(value)}>
          8
        </BlueCalculatorBTN>
        <BlueCalculatorBTN handleClick={(value) => num_handle(value)}>
          9
        </BlueCalculatorBTN>
        <BlueCalculatorBTN handleClick={(value) => spcl_handle(value)}>
          *
        </BlueCalculatorBTN>
        <BlueCalculatorBTN handleClick={(value) => num_handle(value)}>
          4
        </BlueCalculatorBTN>
        <BlueCalculatorBTN handleClick={(value) => num_handle(value)}>
          5
        </BlueCalculatorBTN>
        <BlueCalculatorBTN handleClick={(value) => num_handle(value)}>
          6
        </BlueCalculatorBTN>
        <BlueCalculatorBTN handleClick={(value) => spcl_handle(value)}>
          -
        </BlueCalculatorBTN>
        <BlueCalculatorBTN handleClick={(value) => num_handle(value)}>
          1
        </BlueCalculatorBTN>
        <BlueCalculatorBTN handleClick={(value) => num_handle(value)}>
          2
        </BlueCalculatorBTN>
        <BlueCalculatorBTN handleClick={(value) => num_handle(value)}>
          3
        </BlueCalculatorBTN>
        <BlueCalculatorBTN handleClick={(value) => spcl_handle(value)}>
          +
        </BlueCalculatorBTN>
        <BlueCalculatorBTN handleClick={(value) => spcl_handle(value)}>
          .
        </BlueCalculatorBTN>
        <BlueCalculatorBTN handleClick={(value) => num_handle(value)}>
          0
        </BlueCalculatorBTN>
        <BlueCalculatorBTN handleClick={(value) => spcl_handle(value)}>
          del
        </BlueCalculatorBTN>
        <BlueCalculatorBTN handleClick={(value) => spcl_handle(value)}>
          =
        </BlueCalculatorBTN>
      </div>
    </div>
  );
}
