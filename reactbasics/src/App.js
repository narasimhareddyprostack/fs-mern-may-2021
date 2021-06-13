import React, { Component } from "react";
import Navbar from "./LifeCycle/Navbar";
import ProductCounter from "./ProductCounter/ProductItem";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DigitalWatch from "./LifeCycle/DigitalWatch";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/digital" exact component={DigitalWatch}></Route>
            <Route path="/counter" exact component={ProductCounter}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
