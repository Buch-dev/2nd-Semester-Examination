import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home Page of the custom counter examination" />
        <link rel="canonical" href="/" />
      </Helmet>
      <h1>Alt-School Africa 2nd Semester Examination</h1>
      <div>
        <h2>The page to Counter App using a Custom hook</h2>
        <Link to="custom-counter">Custom Counter</Link>
      </div>
      <div>
        <h2>The page to Counter App using useReducer </h2>
        <Link to="reducer-counter">Reducer Counter</Link>
      </div>
    </>
  );
};
