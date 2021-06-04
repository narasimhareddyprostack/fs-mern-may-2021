import React, { Component } from "react";

class Hike extends Component {
  state = {
    hike: 0,
    sal: 50000,
  };
  getHikeHandler = (value) => {
    var currentSal = (this.state.sal * value) / 100 + this.state.sal;
    console.log(value);
    console.log(currentSal);
    this.setState({ sal: currentSal });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4>
                    Your Eligible for Hike and Your Current Sal:
                    {this.state.sal}
                  </h4>
                </div>
                <div className="card-body">
                  <button
                    onClick={this.getHikeHandler.bind(this, 10)}
                    className="btn btn-success"
                  >
                    10 %
                  </button>
                  <button
                    onClick={this.getHikeHandler.bind(this, 30)}
                    className="btn btn-warning xyz mx-2"
                  >
                    30 %
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Hike;
