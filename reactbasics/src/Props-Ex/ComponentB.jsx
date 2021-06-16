import React, { Component } from "react";

class ComponentB extends Component {
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props)}</pre>
        <h1>Name: {this.props.props1}</h1>
        <h1>Location: {this.props.props2[0]}</h1>
        <h1>Email: {this.props.props3.email}</h1>
        {this.props.props4()}
        {this.props.props4(10)}
        {this.props.props4(5)}
      </div>
    );
  }
}

export default ComponentB;
