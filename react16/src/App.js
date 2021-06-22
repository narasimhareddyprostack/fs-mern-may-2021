import React from "react";
import Navbar from "./Navbar/Navbar";
import Counter from "./Hooks/Counter";
import ProductCounter from "./Hooks/ProductCounter";
let App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Counter />
      <ProductCounter />
    </React.Fragment>
  );
};

export default App;
