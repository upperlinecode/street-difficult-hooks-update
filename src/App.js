import React from "react";
import DataView from "./components/DataView/DataView"; // File - assumes .js extension if not provided.
import Navbar from "./components/Navbar"; // Directory - assumes index.js if none listed.
import "./App.css";

// We're using an es6 arrow function, but this could also be written:
// function App() {}

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <h1 className="header">Earn More, Pay Less? </h1>
      <h2 className="subheader">
        Average Housing Costs and Incomes by NYC Borough
      </h2>
      <DataView />
    </div>
  );
};

export default App;
