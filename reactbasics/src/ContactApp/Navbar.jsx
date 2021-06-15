import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            React - Contact App
          </a>
          <a href="/"> Contacts</a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
