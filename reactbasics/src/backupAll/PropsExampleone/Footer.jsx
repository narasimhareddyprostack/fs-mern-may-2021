import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <>
        <pre>{JSON.stringify(this.props)}</pre>
        <h1> Employee Name:{this.props.employeeData.name}</h1>
      </>
    );
  }
}
export default Footer;
