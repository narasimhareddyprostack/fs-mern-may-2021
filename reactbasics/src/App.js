import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import UserList from "./ContactApp/UserList";
import Product from "./ContactApp/Product";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <UserList />
        <hr />
        <Product />
      </div>
    );
  }
}

export default App;
