import React, { Component } from "react";
import CompB from "./CompB";

class CompA extends Component {
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-10">
              <div className="card">
                <div className="card-body bg-warning text-white">
                  <p className="h5"> Component A</p>
                  <pre>{JSON.stringify(this.props)}</pre>
                  <CompB emp1={this.props.emp} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompA;
