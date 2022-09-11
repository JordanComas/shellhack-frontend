import React from "react";
import TextField from "@mui/material/TextField";
import "./contact.css";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
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

  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_wrfzvsf",
        "template_on4jxuq",
        form.current,
        "Ij8EUmTmsgfR6XGaY"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="contact-info">
          <TextField
            id="standard-basic"
            name="from_name"
            type="text"
            label="Full Name"
            variant="standard"
            sx={{ width: 350 }}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            type="email"
            id="standard-basic"
            label="Email"
            name="user_email"
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
            label="Comment"
            id="fullWidth"
            name="message"
            sx={{ width: 550, marginTop: 5, marginBottom: 5 }}
            onChange={(e) => setComment(e.target.value)}
          />
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              onClick={sendEmail}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Stack>

          <h3>{status}</h3>
        </div>
        {/* <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form> */}
      </form>
      {/* return (
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea name="html_message" />
        <input type="submit" value="Send" />
      </form>
      ); } */}
    </div>
  );
};

export default Contact;
