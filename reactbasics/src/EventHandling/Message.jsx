import React, { Component } from "react";

class Message extends Component {
  state = {
    message: "Hello",
  };
  gmHandler = () => {
    this.setState({ message: "Good Morning" });
  };
  gnHandler() {
    this.setState({ message: "Good Night" });
  }
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  Message:...{this.state.message}
                </div>
                <div className="card-body">
                  <button className="btn btn-success" onClick={this.gmHandler}>
                    Good Morning
                  </button>
                  <button
                    className="btn btn-warning mx-2"
                    onClick={() => {
                      this.gnHandler();
                    }}
                  >
                    Good Night
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
