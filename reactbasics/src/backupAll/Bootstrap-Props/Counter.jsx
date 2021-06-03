import React from "react";
class Couter extends React.Component {
  state = {
    couter: 1,
  };
  decrHandler = () => {
    this.setState({ couter: this.state.couter - 1 });
  };
  incrHandler = () => {
    this.setState({ couter: this.state.couter + 1 });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <div className="card-header"> Qty: {this.state.couter}</div>
                <div className="card-body">
                  <button className="btn btn-danger" onClick={this.decrHandler}>
                    Decr
                  </button>
                  <button
                    className="btn btn-success mx-2"
                    onClick={this.incrHandler}
                  >
                    Incr
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Couter;
