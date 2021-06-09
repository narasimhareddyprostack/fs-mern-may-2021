import React, { Component } from "react";
import Employee from "./EmployeeData/Employee";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            React - Employee Data
          </a>
        </nav>
        <Employee />
      </div>
    );
  }
}

export default App;
