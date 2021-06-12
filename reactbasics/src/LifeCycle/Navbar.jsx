import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            React - Component Life Cycle Method - Class
          </Link>
          <Link to="/digital"> Digital</Link>
          <Link to="/counter"> Product Counter</Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
