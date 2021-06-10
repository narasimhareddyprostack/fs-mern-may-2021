import React, { Component } from "react";
import Employee from "./EmployeeData/Employee";
import UseLogin from "./Rendering/UserLogin";
import ProductItem from "./ProductCounter/ProductItem";
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            React - Employee Data
          </a>
        </nav>
        <ProductItem />
        {/*   <Employee /> */}
        {/*  <UseLogin /> */}
      </div>
    );
  }
}

export default App;
