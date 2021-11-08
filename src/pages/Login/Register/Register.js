import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});
const history = useHistory();
// const location = useLocation();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your Password did not match");
      return;
    } else {
      alert("Your Register Successfully");
    }
    registerUser(loginData.email, loginData.password, loginData.name , history);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && (
            <div>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                name="name"
                onBlur={handleBlur}
                label="Your Name"
                variant="standard"
              ></TextField>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                type="email"
                name="email"
                onBlur={handleBlur}
                label="Your Email"
                variant="standard"
              ></TextField>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                name="password"
                onBlur={handleBlur}
                type="password"
                label="Your Password"
                variant="standard"
              ></TextField>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                name="password2"
                onBlur={handleBlur}
                type="password"
                label="Retype Your Password"
                variant="standard"
              ></TextField>

              <Button
                onClick={handleLoginSubmit}
                sx={{ width: "75%", m: 1 }}
                variant="contained"
              >
                Register
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text"> Already Register ? Place Login</Button>
              </NavLink>
            </div>
          )}

          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">User Created Successfully !</Alert>
          )}
          {authError && (
            <Alert severity="error">
              {authError}
            </Alert>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="img" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
