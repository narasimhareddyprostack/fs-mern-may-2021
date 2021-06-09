import React, { Component } from "react";
import CompC from "./CompC";
import CompA from "./CompA";
class CompB extends Component {
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body bg-primary text-white">
                  <p className="h5"> Component B</p>
                  <pre>{JSON.stringify(this.props)}</pre>
                  <CompC emp2={this.props.emp1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompB;
