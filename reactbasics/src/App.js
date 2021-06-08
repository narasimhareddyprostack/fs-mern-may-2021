import React, { Component } from "react";
/* import Login from "./Forms/Login";
/* import SMSApp from "./Forms/SMSApp"; */
/* import ShowPassword from "./Forms/ShowPassword"; */
import Registration from "./Forms/Registration";
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            React Form Handling
          </a>
        </nav>
        {/*  <Login /> */}
        {/*  <SMSApp /> */}
        {/* <ShowPassword /> */}
        <Registration />
      </div>
    );
  }
}

export default App;
