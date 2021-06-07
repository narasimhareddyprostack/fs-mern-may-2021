import React, { Component } from "react";
import Login from "./Forms/Login";
import SMSApp from "./Forms/SMSApp";
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            React Form Handling
          </a>
        </nav>
        {/* <Login /> */}
        <SMSApp />
      </div>
    );
  }
}

export default App;
