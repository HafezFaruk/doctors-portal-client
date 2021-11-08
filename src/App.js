import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Appointment from "./pages/Appointment/Appointment/Appointment";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Register from "./pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <PrivateRoute exact path="/appointment">
              <Appointment />
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
