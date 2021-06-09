import React, { Component } from "react";
import { employeeData } from "../Static/Data";

export class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: employeeData,
    };
  }
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-10">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">City</th>
                    <th scope="col">DOB</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.employee.map((emp) => {
                    return (
                      <tr>
                        <td>{emp.login.uuid.slice(32, 36)}</td>
                        <td>
                          {emp.name.first} {emp.name.last}
                        </td>
                        <td>{emp.location.city}</td>
                        <td>{emp.dob.date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
