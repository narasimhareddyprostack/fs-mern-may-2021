import React from "react";
import Footer from "./Footer";
class Header extends React.Component {
  emp = {
    name: "Kavitha",
    sal: 50000,
    loc: "Bangalore",
  };
  render() {
    return (
      <>
        <h1> Header Component Data</h1>
        <hr />
        <Footer employeeData={this.emp} />
      </>
    );
  }
}
export default Header;
