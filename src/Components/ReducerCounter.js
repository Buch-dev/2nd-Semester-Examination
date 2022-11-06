import React, { useReducer } from "react";
import { Helmet } from "react-helmet-async";

let initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;

    default:
      return state;
  }
};

export const ReducerCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <Helmet>
        <title>useReducer Counter Page</title>
        <meta name="description" content="Counter Application using a useReducer hook" />
        <link rel="canonical" href="reducer-counter" />
      </Helmet>
      <div className="value">{count}</div>
      <button onClick={() => dispatch("increment")} className='increment'>Increment</button>
      <button onClick={() => dispatch("decrement")} className='decrement'>Decrement</button>
      <button onClick={() => dispatch("reset")} className='reset'>Reset</button>
    </div>
  );
};
