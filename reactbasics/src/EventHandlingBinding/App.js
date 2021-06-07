import React, { Component } from "react";
import Navbar from "./EventHandlingBinding/Navbar";
import Message from "./EventHandlingBinding/Message";
import Hike from "./EventHandlingBinding/Hike";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Message />
        <Hike />
      </div>
    );
  }
}

export default App;
