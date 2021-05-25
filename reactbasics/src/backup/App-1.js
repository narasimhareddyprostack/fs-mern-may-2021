/*
    1.Functional comp should return one and only element is JSX
    2. export default <ComponetName>
*/

import React from "react";
function App() {
  return (
    <React.Fragment>
      <h1> One </h1>
      <h2>Two</h2>
      <h3>Thre</h3>
      <h4> Four</h4>
    </React.Fragment>
  );
}

export default App;
