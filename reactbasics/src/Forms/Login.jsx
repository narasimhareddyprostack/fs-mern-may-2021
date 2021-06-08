import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  /*  emailHandler = (event) => {
    console.log(event.target.value);
    this.setState({ email: event.target.value });
  };
  passwordHandler = (event) => {
    this.setState({ password: event.target.value });
  }; */

  updateState = (event) => {
    /*  console.log(event.target);
    console.log(event.target.name); */
    this.setState({ [event.target.name]: event.target.value });
  };
  loginHandler = (event) => {
    console.log(this.state.email, "....", this.state.password);
    event.preventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4> Login Form</h4>
                  <pre>{JSON.stringify(this.state)}</pre>
                </div>
                <div className="card-body">
                  <form onSubmit={this.loginHandler}>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="email"
                        className="form-control"
                        onChange={this.updateState}
                        name="email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        onChange={this.updateState}
                        name="password"
                      />
                    </div>
                    <div>
                      <input
                        type="submit"
                        className="btn btn-success btn-sm"
                        value="Login"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
