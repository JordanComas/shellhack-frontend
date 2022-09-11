import React from "react";
import "../components/login.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { get, post } from "../services/service";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState("");
  const navigate = useNavigate();

  const navigateCreate = () => {
    navigate("/dashboard");
  };

  const Status = async (e) => {
    e.preventDefault();
    if (!email || !password || password.length < 6) {
      setStatus("Please enter a valid username and password");
    } else {
      try {
        let response = await post("/users/login", {
          email: email,
          password: password,
        });
        // console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", response.data.email);
        // localStorage.setItem("name", response.data.firstName);
        navigateCreate();
      } catch (err) {
        console.error(err.message);
        setStatus("Password or username is incorrect");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login">
        <h1>LogIn</h1>
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          onChange={(e) => setEmail(e.target.value)}
          sx={{ width: 300, paddingBottom: 7, marginLeft: 5 }}
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          className="second-name"
          sx={{ width: 300, marginLeft: 5 }}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Stack spacing={2} direction="row">
          <Button onClick={Status} variant="contained" sx={{ marginTop: 8 }}>
            LogIn
          </Button>
        </Stack>
        <Loader />
      </div>
    </div>
  );
};

export default Login;
