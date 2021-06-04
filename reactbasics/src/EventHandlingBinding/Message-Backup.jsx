import React, { Component } from "react";
class Message extends Component {
  state = {
    message: "Hello",
  };
  gmHandler = () => {
    this.setState({ message: "Hello, Good Morning" });
  };
  gaHandler() {
    this.setState({ message: "Hello, Good After Noon" });
  }
  gnHandler = (value) => {
    console.log(value);
    this.setState({ message: value });
  };
  render() {
    return (
      <>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3>Message:{this.state.message}</h3>
                </div>
                <div className="card-body">
                  <button className="btn btn-success" onClick={this.gmHandler}>
                    GM
                  </button>
                  <button
                    className="btn btn-dark mx-2"
                    onClick={() => {
                      this.gaHandler();
                    }}
                  >
                    GA
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={this.gnHandler.bind(this, "Hello, Good Night")}
                  >
                    GN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Message;
