import React, { useState } from "react";
let ProductCounter = () => {
  let [product, setProduct] = useState({
    name: "Lenovo Tab M8 (2nd Gen) HD 2 GB RAM 32 GB ROM 8",
    image:
      "https://rukminim1.flixcart.com/image/224/224/k6qsn0w0/tablet/3/q/z/lenovo-za5g0047in-original-imafp4w7qvpnprv5.jpeg?q=90",
    qty: 2,
    price: 1070,
  });
  let decrHandler = () => {
    setProduct({ ...product, qty: product.qty - 1 });
  };
  let incrHandler = () => {
    setProduct({ ...product, qty: product.qty + 1 });
  };
  return (
    <>
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
                  <td>{product.name}</td>
                  <td>
                    <img
                      src={product.image}
                      width="50"
                      height="50"
                      alt="iphone"
                    />
                  </td>
                  <td>
                    <i
                      className="fa fa-minus-circle mx-1"
                      onClick={decrHandler}
                    />
                    {product.qty}
                    <i
                      className="fa fa-plus-circle mx-1"
                      onClick={incrHandler}
                    />
                  </td>
                  <td>{product.price}</td>
                  <td>{product.qty * product.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCounter;
