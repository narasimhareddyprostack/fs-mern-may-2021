import React, { useState } from "react";
let Counter = () => {
  let [counter, setCounter] = useState(1);
  let incrHandler = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h1>Counter:{counter}</h1>
              </div>
              <div className="card-body">
                <button className="btn btn-success" onClick={incrHandler}>
                  Incr
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Counter;
