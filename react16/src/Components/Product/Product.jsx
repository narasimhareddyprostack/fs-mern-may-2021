import React, { useEffect } from "react";
import {
  incrProductQty,
  decrProductQty,
} from "../../redux/Product/product.action";

import { useSelector, useDispatch } from "react-redux";

let Product = () => {
  let dispatch = useDispatch();
  let Product = useSelector((state) => {
    return state.product;
  });
  let decrHandler = () => {
    // setProduct({ ...Product, qty: Product.qty - 1 });
    dispatch(decrProductQty());
  };
  let incrHandler = () => {
    //setProduct({ ...Product, qty: Product.qty + 1 });
    dispatch(incrProductQty());
  };
  useEffect(() => {
    console.log("Test 123");
    dispatch(incrProductQty());
  }, [dispatch]);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-9">
            <table className="table table-hover table-striped ">
              <thead className="thead-dark">
                <tr>
                  <th>Product Name</th>
                  <th>Image</th>
                  <th>QTY</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Product.product_Name}</td>
                  <td>
                    <img src={Product.image} height="80px" width="80px" />
                  </td>
                  <td>
                    <i className="fa fa-minus-circle" onClick={decrHandler}></i>
                    {Product.qty}
                    <i className="fa fa-plus-circle" onClick={incrHandler}></i>
                  </td>
                  <td>{Product.price}</td>
                  <td>{Product.qty * Product.product.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
