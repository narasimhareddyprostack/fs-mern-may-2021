import React, { useState } from "react";
let Login = () => {
  let [user, setUser] = useState({ userName: "", password: "" });
  let inputHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  let submitHandler = (event) => {
    event.preventDefault(); //preventing HTML Form default behaiver
    // avoid to loosing data
    console.log(user);
    //send user object.
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Login Form
                <pre>{JSON.stringify(user)}</pre>
              </div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="text"
                      name="userName"
                      className="form-control"
                      onChange={inputHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="text"
                      name="password"
                      className="form-control"
                      onChange={inputHandler}
                    />
                  </div>
                  <div className="form-group">
                    <input type="submit" className="btn btn-success" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
