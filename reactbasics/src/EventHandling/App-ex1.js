import React, { Component } from "react";

class App extends Component {
  state = {
    wishMessage: "Hello",
  };
  wish() {
    this.setState({ wishMessage: "Hello, Good Night" });
    console.log("Hello");
  }
  message = () => {
    this.setState({ wishMessage: "Hello, Good Morning" });
    console.log("Hello, GM");
  };

  render() {
    return (
      <div>
        <h1> React Js Event Handling</h1>
        <h2>wish Message: {this.state.wishMessage}</h2>
        <hr />
        <button onClick={this.message}> GM </button>
        <button
          onClick={() => {
            this.wish();
          }}
        >
          GN
        </button>
      </div>
    );
  }
}

export default App;
