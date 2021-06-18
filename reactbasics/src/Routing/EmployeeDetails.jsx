import React, { Component } from "react";
class EmployeeDetails extends Component {
  render() {
    let employeeId = this.props.match.params.id;

    return (
      <div>
        <h1>Employee Details</h1>
        <h2>{employeeId}</h2>
      </div>
    );
  }
}

export default EmployeeDetails;
