import React, { Component } from "react";

class Registration extends Component {
  state = {
    userName: "",
    email: "",
    password: "",
  };
  formHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  registrationHandler = (event) => {
    //registration
    //consume api
    console.log(this.state.userName);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4> Registration Form</h4>
                  <pre>{JSON.stringify(this.state)}</pre>
                </div>
                <div className="card-body">
                  <form onSubmit={this.registrationHandler}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="userName"
                        placeholder="User Name"
                        className="form-control"
                        onChange={this.formHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                        onChange={this.formHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control"
                        onChange={this.formHandler}
                      />
                    </div>
                    <input
                      type="submit"
                      className="btn btn-success"
                      value="Sign Up"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
