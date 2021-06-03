import React from "react";
class Message extends React.Component {
  state = {
    message: "Good Morning",
  };
  changeMessage() {
    this.setState({ message: "Good Afternoon" });
  }
  render() {
    return (
      <React.Fragment>
        <h1> {this.state.message}</h1>
        <button
          onClick={() => {
            this.changeMessage();
          }}
        >
          Change Message
        </button>
      </React.Fragment>
    );
  }
}
export default Message;
