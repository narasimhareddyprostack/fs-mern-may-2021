import React, { Component } from "react";
import axios from "axios";
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {},
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/product/laptops")
      .then((response) => {
        this.setState({ ...this.state.products, products: response.data });
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.products)}</pre>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <table className="table thead-dark">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {/*  <td>{this.state.products.product[0].name}</td> */}
                  </tr>
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
