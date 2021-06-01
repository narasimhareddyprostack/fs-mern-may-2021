import React from "react";
class Message extends React.Component {
  state = {
    wishMessage: "Hello, Good Morning",
  };

  messageHandler = () => {
    this.setState({ wishMessage: "Hi, Good Afternoon" });
  };
  goodNightHandler = () => {
    this.setState({ wishMessage: " Hello, Good Night" });
  };
  render() {
    return (
      <>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <h4> {this.state.wishMessage}</h4>
                </div>
                <div className="card-body">
                  <button
                    className="btn btn-danger"
                    onClick={this.messageHandler}
                  >
                    Good Afternoon
                  </button>

                  <button
                    className="btn btn-warning mx-2"
                    onClick={this.goodNightHandler}
                  >
                    Good Night
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
