import React from "react";
import "../components/signup.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { get, post } from "../services/service";
import { useNavigate } from "react-router-dom";
import Signup1 from "../images/signup.jpeg";
import eye from "../images/eye.png";
import Loader from "./Loader";

const Signup = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [passwordShown, setPasswordShown] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

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
        setIsLoading(true);
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
        setIsLoading(false);
      }
    }
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="signup-page">
      <div className="all">
        <div className="details">
          <div className="required">
            <p>* Required</p>
          </div>
          <div className="signup-names">
            <TextField
              id="standard-basic"
              label="First Name"
              variant="standard"
              onChange={(e) => setFirstName(e.target.value)}
              sx={{ width: 250, paddingBottom: 2, margin: 1 }}
            />
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
              className="second-name"
              sx={{ width: 250, paddingBottom: 2, margin: 1 }}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="signup-names">
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              type="email"
              sx={{ width: 250, paddingBottom: 2, margin: 1 }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Phone Number"
              variant="standard"
              sx={{ width: 250, paddingBottom: 2, margin: 1 }}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="signup-passwords">
            <TextField
              id="standard-password-input"
              label="Password"
              type={passwordShown ? "text" : "password"}
              // autoComplete="current-password"
              variant="standard"
              sx={{ width: 250, paddingBottom: 2, margin: 1 }}
              onChange={(e) => setPassword(e.target.value)}
            />

            <TextField
              id="standard-password-input"
              label="Re-enter Password"
              type={passwordShown ? "text" : "password"}
              // autoComplete="current-password"
              variant="standard"
              sx={{ width: 250, paddingBottom: 2, margin: 1 }}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <img className="eye" onClick={togglePassword} src={eye} alt="" />
          </div>
          <Stack spacing={2} direction="row">
            <Button onClick={Status} variant="contained" sx={{ marginTop: 8 }}>
              SignUp
            </Button>
          </Stack>
          <h3>{status}</h3>
        </div>
        <div className="details2">
          <hr className="hrline1" />
          <h1 className="hrline-text">
            Save<b>E</b>xp
          </h1>
          <hr className="hrline2" />
          <img src={Signup1} />
        </div>
      </div>
      <div className="loader-div">
        {isLoading && <Loader />}
        {/* <Loader /> */}
      </div>
    </div>
  );
};

export default Signup;
