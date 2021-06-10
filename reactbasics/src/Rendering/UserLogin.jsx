import React, { Component } from "react";
import Login from "../Forms/Login";

export class UserLogin extends Component {
  state = {
    isLoggin: false,
    message: "",
  };
  updateLogin = () => {
    this.setState({
      isLoggin: true,
      message: "Welcome to PSA",
    });
  };
  updataLogout = () => {
    this.setState({
      isLoggin: false,
      message: "Thank you , Visit Again",
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4>Condition Render:</h4>
                  <h6>{this.state.message}</h6>
                </div>
                <div className="card-body">
                  {!this.state.isLoggin ? (
                    <button
                      className="btn btn-success"
                      onClick={this.updateLogin}
                    >
                      Login
                    </button>
                  ) : (
                    <button
                      className="btn btn-warning"
                      onClick={this.updataLogout}
                    >
                      Logout
                    </button>
                  )}
                </div>
              </div>
            </div>
            {this.state.isLoggin ? (
              <div>
                <Login />
              </div>
            ) : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserLogin;
