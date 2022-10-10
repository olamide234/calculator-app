import React, { useState } from "react";
import "./App.css";

export default function Calculator() {
  const [previous, setPrevious] = useState(null);
  const [current, setCurrent] = useState("");
  const [operator, setOperator] = useState(null);
  const [operatorClicked, setOperatorClicked] = useState(false);

  const operation = (a, b) => {
    if (operator === "+") {
      return a + b;
    }
    if (operator === "-") {
      return a - b;
    }
    if (operator === "*") {
      return a * b;
    }
    if (operator === "/") {
      return a / b;
    }
  };

  const clear = () => {
    setCurrent("");
  };
  const sign = () => {
    if (current.charAt(0) === "-") {
      setCurrent(current.slice(1));
    } else {
      setCurrent(`-${current}`);
    }
  };
  const percent = () => {
    const calcPercent = `${parseFloat(current) / 100}`;
    setCurrent(calcPercent);
    if (calcPercent === "NaN") {
      setCurrent("");
    }
  };
  const append = (e) => {
    const val = e.target.innerHTML;
    const addedValue = `${current}${val}`;
    if (operatorClicked) {
      setCurrent(val);
      setOperatorClicked(false);
    } else {
      setCurrent(addedValue);
    }
  };
  const appendSymbol = (symbol) => {
    const addedValue = `${current}${symbol}`;
    if (operatorClicked) {
      setOperatorClicked(false);
    }
    setCurrent(addedValue);
  };
  const dot = () => {
    if (current.indexOf(".") === -1) {
      appendSymbol(".");
    }
  };
  const switchOperands = () => {
    setPrevious(current);
    setOperatorClicked(true);
  };
  const performOperation = (e) => {
    const val = e.target.innerHTML;
    if (val === "÷") {
      setOperator("/");
    } else if (val === "x") {
      setOperator("*");
    } else if (val === "−") {
      setOperator("-");
    } else if (val === "+") {
      setOperator("+");
    }
    switchOperands();
  };
  const equals = () => {
    setCurrent(`${operation(parseFloat(previous), parseFloat(current))}`);
    setPrevious(null);
    setOperatorClicked(true);
    if (current === "NaN") {
      setCurrent("");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{current || 0}</div>
      <div onClick={clear} className="btn">
        C
      </div>
      <div onClick={sign} className="btn">
        +/-
      </div>
      <div onClick={percent} className="btn">
        %
      </div>
      <div onClick={performOperation} className="btn operator">
        ÷
      </div>
      <div onClick={append} className="btn">
        7
      </div>
      <div onClick={append} className="btn">
        8
      </div>
      <div onClick={append} className="btn">
        9
      </div>
      <div onClick={performOperation} className="btn operator">
        x
      </div>
      <div onClick={append} className="btn">
        4
      </div>
      <div onClick={append} className="btn">
        5
      </div>
      <div onClick={append} className="btn">
        6
      </div>
      <div onClick={performOperation} className="btn operator">
        −
      </div>
      <div onClick={append} className="btn">
        1
      </div>
      <div onClick={append} className="btn">
        2
      </div>
      <div onClick={append} className="btn">
        3
      </div>
      <div onClick={performOperation} className="btn operator">
        +
      </div>
      <div onClick={append} className="zero btn">
        0
      </div>
      <div onClick={dot} className="btn">
        .
      </div>
      <div onClick={equals} className="btn operator">
        =
      </div>
    </div>
  );
}
