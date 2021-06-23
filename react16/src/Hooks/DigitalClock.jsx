import React, { useState, useEffect } from "react";
let DigitalClock = () => {
  //let currentTime = new Date().toLocaleTimeString();
  let [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    let timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      console.log("Hello");
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">{currentTime}</div>
              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalClock;
