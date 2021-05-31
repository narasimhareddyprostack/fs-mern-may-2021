import React from "react";
function Header(props) {
  var one = 1;
  var two = 2;
  return (
    <React.Fragment>
      <pre>{JSON.stringify(props)}</pre>
      <h2>Employee Name from - App: {props.one} </h2>
      <h2>Employee Salary from -App:{props.two}</h2>
      <hr />
      <h5> Order Info</h5>
      <h3> Order Id:{props.four.orderId}</h3>
      <h4> Order Value:{props.four.order_Value + 60}</h4>
      <h5> {one + two}</h5>
    </React.Fragment>
  );
}
export default Header;
