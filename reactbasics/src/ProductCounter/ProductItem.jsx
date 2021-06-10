import React, { Component } from "react";

export class ProductItem extends Component {
  state = {
    product: {
      name: "Lenovo Tab M8 (2nd Gen) HD 2 GB RAM 32 GB ROM 8",
      image:
        "https://rukminim1.flixcart.com/image/224/224/k6qsn0w0/tablet/3/q/z/lenovo-za5g0047in-original-imafp4w7qvpnprv5.jpeg?q=90",
      qty: 2,
      price: 1070,
    },
  };
  decrHandler = () => {
    console.log("Test");
    this.setState({
      product: {
        ...this.state.product,
        qty: this.state.product.qty - 1 > 0 ? this.state.product.qty - 1 : 1,
      },
    });
  };
  incrHandler = () => {
    console.log("Test");
    this.setState({
      product: {
        ...this.state.product,
        qty: this.state.product.qty + 1,
      },
    });
  };
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-10">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Image</th>
                    <th>QTY</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.product.name}</td>
                    <td>
                      <img
                        src={this.state.product.image}
                        width="50"
                        height="50"
                      />
                    </td>
                    <td>
                      <i
                        className="fa fa-minus-circle mx-1"
                        onClick={this.decrHandler}
                      />
                      {this.state.product.qty}
                      <i
                        className="fa fa-plus-circle mx-1"
                        onClick={this.incrHandler}
                      />
                    </td>
                    <td>{this.state.product.price}</td>
                    <td>{this.state.product.qty * this.state.product.price}</td>
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

export default ProductItem;
