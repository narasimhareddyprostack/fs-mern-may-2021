import React, { Component } from "react";
import CompA from "./Props-Drilling/CompA";

class App extends Component {
  state = {
    userInfo: {
      name: "Narasimha",
      project: "PCart",
    },
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            React Props Drilling
          </a>
        </nav>
        <pre> Employee Name: {this.state.userInfo.name}</pre>
        <pre> Project Name: {this.state.userInfo.project}</pre>
        <CompA emp={this.state.userInfo} />
      </div>
    );
  }
}

export default App;
