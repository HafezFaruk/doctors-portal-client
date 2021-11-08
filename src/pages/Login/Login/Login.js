import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink,useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";


const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading,signInWithGoogle, authError } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location,history);
    e.preventDefault();
  };
  const handleGoogleSignIn = () =>{
    signInWithGoogle(location,history)
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            login
          </Typography>
          <div>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              type="email"
              name="email"
              onBlur={handleOnBlur}
              label="Your Email"
              variant="standard"
            ></TextField>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              name="password"
              onBlur={handleOnBlur}
              type="password"
              label="Your Password"
              variant="standard"
            ></TextField>

            <Button
              onClick={handleLoginSubmit}
              sx={{ width: "75%", m: 1 }}
              variant="contained"
            >
              Login
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button variant="text">New User ? Place Register</Button>
            </NavLink>

            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">User Created Successfully !</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </div>
          <p>---------OR----------</p>
          <Button onClick={handleGoogleSignIn} variant="contained">Google LogIn</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="img" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
