import React from "react";
import { useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../actions/counterActions";
import "../styles.css";

const CounterButton = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <div className="counter-buttons">
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default CounterButton;
