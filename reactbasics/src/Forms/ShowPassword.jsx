import React, { Component } from "react";

class ShowPassword extends Component {
  state = {
    type: "password",
  };
  updateState = () => {
    //condition ?  T : F
    this.state.type === "password"
      ? this.setState({ type: "text" })
      : this.setState({ type: "password" });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4>Show Password</h4>
                </div>
                <div className="card-body">
                  <div className="input-group mb-3 form-group">
                    <input type={this.state.type} className="form-control" />
                    {/*  <i className="fa fa-eye" aria-hidden="true"></i> */}
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <input type="checkbox" onChange={this.updateState} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ShowPassword;
