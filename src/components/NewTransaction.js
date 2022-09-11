import React from "react";
import "../components/newtransaction.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { get, post } from "../services/service";
import { useNavigate } from "react-router-dom";
import Signup1 from "../images/signup.jpeg";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const NewTransaction = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [type, setType] = React.useState("");
  //   const [category, setCategory] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [age, setAge] = React.useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const navigateDash = () => {
    navigate("/dashboard");
  };

  const Status = async (e) => {
    e.preventDefault();
    if (!title || !description || !date || !amount) {
      setStatus("Please enter valid credentials");
    } else {
      try {
        let response = await post("/transactions/create", {
          title: title,
          description: description,
          date: date,
          amount: amount,
          type: type,
          //   category: category,
        });
        // console.log(process.env);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.id);
        // setStatus("welcome");
        navigateDash();
      } catch (err) {
        console.error(err.message);
        // setStatus("type or username is incorrect");
      }
    }
  };
  return (
    <div className="transaction-page">
      {/* <h1>NewTransaction</h1> */}
      <section1>
        <div className="all">
          <div className="details">
            <div className="lists">
              <h1>Create transaction</h1>
              <TextField
                id="standard-basic"
                label="Title"
                variant="standard"
                onChange={(e) => setTitle(e.target.value)}
                sx={{ width: 410, paddingBottom: 7, marginTop: 5 }}
              />
              <TextField
                id="standard-basic"
                label="Description"
                variant="standard"
                // className="second-name"
                sx={{ width: 410, paddingBottom: 7 }}
                onChange={(e) => setDescription(e.target.value)}
              />

              <div className="price">
                <TextField
                  id="standard-basic"
                  label="Amount"
                  variant="standard"
                  sx={{ width: 270, paddingBottom: 7 }}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <FormControl
                  variant="standard"
                  sx={{ marginLeft: 1, width: 130 }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={type}>Recurring</MenuItem>
                    <MenuItem value={type}>Non-Recurring</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <TextField
                id="standard-basic"
                label=""
                variant="standard"
                type="date"
                sx={{ width: 415, paddingBottom: 7 }}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {/* <TextField
              id="standard-type-input"
              label="Category"
              type="type"
              variant="standard"
              sx={{ width: 400, paddingBottom: 7 }}
              onChange={(e) => setCategory(e.target.value)}
            /> */}

            {/* <Stack spacing={2} direction="row"> */}
            <Button
              onClick={Status}
              variant="contained"
              sx={{ marginTop: 8, width: 100, backgroundColor: "#2d6590" }}
            >
              Add
            </Button>
            {/* </Stack> */}

            <h3>{status}</h3>
          </div>
        </div>
      </section1>
    </div>
  );
};

export default NewTransaction;
