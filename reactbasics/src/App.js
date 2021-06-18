import React, { Component } from "react";
import Navbar from "./Routing/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Routing/Home";
import AboutUs from "./Routing/AboutUs";
import Employee from "./Routing/Employee";
import EmployeeDetails from "./Routing/EmployeeDetails";
import Contact from "./Routing/Contact";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/employee" component={Employee} />
            <Route exact path="/employee/:id" component={EmployeeDetails} />
            <Route exact path="/contactus" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
