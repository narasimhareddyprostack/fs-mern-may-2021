import React, { Component } from "react";
import axios from "axios";
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState({
            users: response.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.users)}</pre>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <table className="table thead-dark">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.length > 0 ? (
                    <React.Fragment>
                      {this.state.users.map((user) => {
                        return (
                          <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserList;
//invoke HTTP API: https://jsonplaceholder.typicode.com/users
