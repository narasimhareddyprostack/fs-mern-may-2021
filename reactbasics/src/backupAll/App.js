import React from "react";
import Navbar from "./Bootstrap-Props/Navbar";
import Message from "./Bootstrap-Props/Message";
import Counter from "./Bootstrap-Props/Counter";
class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Message />
        <Counter />
      </>
    );
  }
}
export default App;
