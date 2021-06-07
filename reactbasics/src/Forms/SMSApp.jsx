import React, { Component } from "react";

class SMSApp extends Component {
  state = {
    limit: 100,
    count: 100,
  };

  updateValue = (event) => {
    console.log(event.target.value.length);
    console.log(event.target.value);
    this.setState({ count: this.state.limit - event.target.value.length });
  };
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4> SMS App - Remaining Chars Form</h4>
                  <pre>{JSON.stringify(this.state)}</pre>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <textarea
                        rows="4"
                        placeholder="Enter Message"
                        className="form-control"
                        onChange={this.updateValue}
                        maxLength={this.state.limit}
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div className="card-footer">
                  <p className="h4">
                    {" "}
                    Remaining Characters: <span>{this.state.count}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SMSApp;
