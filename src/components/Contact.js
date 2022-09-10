import React from "react";
import TextField from "@mui/material/TextField";
import "./contact.css";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

const Contact = () => {
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [comment, setComment] = React.useState("");

  const check = () => {
    if (!name || !email || !phone) {
      setStatus("Please fill out all the fields.");
    } else {
      setStatus(
        "Thanks for your interest. We will be in touch with you shortly "
      );
    }
  };
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <TextField
          id="standard-basic"
          label="Full Name"
          variant="standard"
          sx={{ width: 350 }}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          sx={{ width: 350, marginTop: 3 }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Phone Number"
          variant="standard"
          sx={{ width: 350, marginTop: 3 }}
          onChange={(e) => setPhone(e.target.value)}
        />

        <TextField
          fullWidth
          label="Comment"
          id="fullWidth"
          sx={{ width: 550, marginTop: 5, marginBottom: 5 }}
          onChange={(e) => setComment(e.target.value)}
        />
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={check} endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack>
        <h3>{status}</h3>
      </div>
    </div>
  );
};

export default Contact;
