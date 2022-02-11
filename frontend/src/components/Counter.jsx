import React from "react";
import { useCounter } from "../helpers/useCounter";

export const Counter = () => {
  const { counter, increment, decrement } = useCounter();

  return (
    <div>
      <h2>Counter is {counter}</h2>
      <button className="btn btn-primary" onClick={increment}>
        increment
      </button>
      <button className="btn btn-info" onClick={decrement}>
        decrement
      </button>
    </div>
  );
};
