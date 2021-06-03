import React, { Component } from "react";

class Hike extends Component {
  state = {
    salaryHike: 0,
  };
  
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h2> Salary Hike: {this.state.salaryHike}</h2>
                </div>
                <div className="card-body">
                  <button className="btn btn-success">50% hike</button>
                  <button className="btn btn-warning mx-2">20 % Hike</button>
                  <button className="btn btn-danger">10 % Hike</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hike;
