import React from "react";
import "../components/signup.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { get, post } from "../services/service";
import { useNavigate } from "react-router-dom";
import Signup1 from "../images/signup.jpeg";

const Signup = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [status, setStatus] = React.useState("");

  const navigate = useNavigate();

  const navigateCreate = () => {
    navigate("/dashboard");
  };

  const Status = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phoneNumber) {
      setStatus("Please enter valid credentials");
    } else if (password.length < 6) {
      setStatus("Please enter valid password");
    } else if (password !== password2) {
      setStatus("Password doesnt match");
    } else {
      try {
        let response = await post("/users/signup", {
          firstName: firstName,
          lastName: lastName,
          password: password,
          email: email,
          // phone: phone,
        });
        // console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", response.data.email);
        // localStorage.setItem("name", response.data.firstName);
        // setStatus("welcome");
        navigateCreate();
      } catch (err) {
        console.error(err.message);
        // setStatus("Password or username is incorrect");
      }
    }
  };
  return (
    <div>
      {/* <h1>Signup</h1> */}
      <section1>
        <div className="all">
          <div className="details">
            <div className="fullname">
              <TextField
                id="standard-basic"
                label="First Name"
                variant="standard"
                onChange={(e) => setFirstName(e.target.value)}
                sx={{ width: 400, paddingBottom: 7, marginTop: 5 }}
              />
              <TextField
                id="standard-basic"
                label="Last Name"
                variant="standard"
                className="second-name"
                sx={{ width: 400, marginLeft: 7, marginTop: 5 }}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                type="email"
                sx={{ width: 300, paddingBottom: 7 }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Phone Number"
                variant="standard"
                sx={{ width: 300, paddingBottom: 7 }}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              // autoComplete="current-password"
              variant="standard"
              sx={{ width: 400, paddingBottom: 7 }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              id="standard-password-input"
              label="Re-Enter Password"
              type="password"
              // autoComplete="current-password"
              variant="standard"
              sx={{ width: 400 }}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <Stack spacing={2} direction="row">
              <Button
                onClick={Status}
                variant="contained"
                sx={{ marginTop: 8 }}
              >
                SignUp
              </Button>
            </Stack>
            <h3>{status}</h3>
          </div>
          <div className="details2">
            <img src={Signup1} />
          </div>
        </div>
      </section1>
    </div>
  );
};

export default Signup;
