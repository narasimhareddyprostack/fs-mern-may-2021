import React from "react";
class Message extends React.Component {
  message = "Good Morning";
  changeMessage() {
    this.message = "Good Afternoon";
    console.log("Button clicked and Method is Executing");
    console.log("Message Property Value:", this.message);
  }
  render() {
    return (
      <React.Fragment>
        <h1> {this.message}</h1>
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
