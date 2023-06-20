import React from "react";
import CounterButton from "./CounterButton";
import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count);

  return (
    <div className="counter">
      <h1>Value: {count}</h1>
      <CounterButton />
    </div>
  );
};

export default Counter;
