import React from "react";
class Counter extends React.Component {
  state = { qty: 1 };
  incrHandler = () => {
    this.setState({ qty: this.state.qty + 1 });
  };
  decrHandler = () => {
    this.setState({ qty: this.state.qty - 1 });
  };
  render() {
    return (
      <>
        <button onClick={this.decrHandler}> Decr</button>
        <span> Product Qty : {this.state.qty}</span>
        <button onClick={this.incrHandler}> Incr </button>
      </>
    );
  }
}
export default Counter;
