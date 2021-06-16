import React, { Component } from "react";
import ComponentB from "./ComponentB";
class ComponentA extends Component {
  emp_Name = "Narasimha";
  emp_Loc = ["Bangalore", "Chennai", "Hyderabad"];
  emp_Details = {
    name: "Narasimha",
    email: "greetlabs@gmail.com",
    salary: 50000,
  };
  get_Emp_Details = (a) => {
    console.log("Parent Component : Method Invoking", a);
  };
  render() {
    return (
      <React.Fragment>
        <h1>Component A</h1>
        <hr />
        <ComponentB
          props1={this.emp_Name}
          props2={this.emp_Loc}
          props3={this.emp_Details}
          props4={this.get_Emp_Details}
        />
      </React.Fragment>
    );
  }
}
export default ComponentA;
