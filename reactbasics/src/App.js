import React, { Component } from "react";
/* import Employee from "./EmployeeData/Employee";
import UseLogin from "./Rendering/UserLogin";
import ProductItem from "./ProductCounter/ProductItem";
 */
import DigitalWatch from "./LifeCycle/DigitalWatch";
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            React - Component Life Cycle Method - Class
          </a>
        </nav>
        <DigitalWatch />
        {/* <ProductItem />
        {/*   <Employee /> */}
        {/*  <UseLogin /> */}
      </div>
    );
  }
}

export default App;
