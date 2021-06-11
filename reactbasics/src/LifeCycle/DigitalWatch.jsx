import React, { Component } from "react";

export default class DigitalWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }
  componentWillUnmount() {
    console.log("..... Destroy");
  }
  render() {
    return (
      <>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-10">
              <div className="card">
                <div className="card-body bg-warning">
                  <h4>Digital Watch</h4>
                </div>
                <div className="card-header">{this.state.currentTime}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
