import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import "./App.css";
import Appointment from "./pages/Appointment/Appointment/Appointment";
import Home from "./pages/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/appointment">
            <Appointment />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
