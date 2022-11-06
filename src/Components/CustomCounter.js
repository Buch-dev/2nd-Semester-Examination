import React from "react";
import useCounter from "../hooks/useCounter";
import { Helmet } from "react-helmet-async";

export const CustomCounter = () => {
  const [value, increment, decrement, reset] = useCounter(0, 1);
  return (
    <div>
      <Helmet>
        <title>Custom Counter Page</title>
        <meta name="description" content="Counter Application using a Custom hook" />
        <link rel="canonical" href="custom-counter" />
      </Helmet>
      <div className="value">{value}</div>
      <div className="max_text">Maximum of 10 counts</div>
      <button onClick={increment} className='increment'>Increment</button>
      <button onClick={decrement} className='decrement'>Decrement</button>
      <button onClick={reset} className='reset'>Reset</button>
    </div>
  );
};
