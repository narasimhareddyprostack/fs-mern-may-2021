import React, { Component } from "react";

export default class DigitalWatch extends Component {
  constructor(props) {
    console.log("First Constructor Will execute");
    super(props);
    this.state = {
      currentTime: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    console.log("After Render Method - comp Did Mount - Third");
    this.currentTimer = setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }
  componentWillUnmount() {
    console.log("Fouth.... Destroy Time");
    clearInterval(this.currentTimer);
  }
  render() {
    console.log("Second - Render Method");
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
