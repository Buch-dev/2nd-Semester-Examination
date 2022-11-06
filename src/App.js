import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom"
import { CustomCounter } from "./Components/CustomCounter";
import { ReducerCounter } from "./Components/ReducerCounter";
import { HomePage } from "./Components/HomePage";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "./Components/Fallback";
import { NoMatch } from "./Components/NoMatch";

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Fallback}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="reducer-counter" element={<ReducerCounter />} />
          <Route path="custom-counter" element={<CustomCounter />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;