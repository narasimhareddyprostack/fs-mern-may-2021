import React, { Component } from "react";

class CompC extends Component {
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body bg-success text-white">
                  <pre>{JSON.stringify(this.props)}</pre>
                  <p className="h5"> Component C</p>
                  <h3>Employee Name:{this.props.emp2.name}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompC;
