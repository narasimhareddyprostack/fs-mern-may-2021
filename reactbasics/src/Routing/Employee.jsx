import React, { Component } from "react";
import { employeeData } from "../Static/Data";
import Axios from "axios";
import { Link } from "react-router-dom";
export class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: employeeData,
    };
  }
  componentDidMount() {
    let url =
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
    Axios.get(url)
      .then((response) => {
        //Success repsonse
        this.setState({
          employee: response.data,
        });
      })
      .catch();
  }
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-10">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Array Index</th>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">City</th>
                    <th scope="col">DOB</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.employee.map((emp, index) => {
                    return (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{emp.login.uuid.slice(32, 36)}</td>
                        <td>
                          <Link to={`/employee/${emp.login.uuid}`}>
                            {emp.name.first} {emp.name.last}
                          </Link>
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
