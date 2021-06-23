import React from "react";
import Navbar from "./Navbar/Navbar";
import Counter from "./Hooks/Counter";
import ProductCounter from "./Hooks/ProductCounter";
import DigitalClock from "./Hooks/DigitalClock";
import Login from "./Hooks/Login";
let App = () => {
  return (
    <React.Fragment>
      <Navbar />
      {/* <Counter />
      <ProductCounter /> */}
      {/*  <Login /> */}
      <DigitalClock />
    </React.Fragment>
  );
};

export default App;
