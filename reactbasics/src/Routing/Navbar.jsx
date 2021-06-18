import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <div className="container">
            <Link to="/" className="navbar-brand">
              React Routing
            </Link>
            <div class="collapse navbar-collapse">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <Link class="nav-link" to="home">
                    Home
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link" to="aboutus">
                    About US
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link" to="employee">
                    Employee
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link" to="contactus">
                    Contact US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
