import React, { Component } from "react";
import Navbar from "./ContactApp/Navbar";
import ContactApp from "./ContactApp/ContactApp";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ContactApp />
      </div>
    );
  }
}

export default App;
