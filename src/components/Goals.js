import React from "react";
import "../components/goals.css";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Goals = () => {
  const [title, setTitle] = React.useState("");
  const [limit, setLimit] = React.useState(0);
  const [date, setDate] = React.useState("");
  const [status, setStatus] = React.useState("");

  return (
    <div className="goals-page">
      <div className="goals-cat">
        <Link to="/subscriptions">
          <h4>All Transactions</h4>
        </Link>
        <Link to="/subscriptions">
          <h4>Categories</h4>
        </Link>
        <Link to="/subscriptions">
          <h4>Subscriptions</h4>
        </Link>
        <Link to="/subscriptions">
          <h4>Goals</h4>
        </Link>
      </div>
      <div className="goals-sections">
        <div className="goals-left">
          <form>
            <TextField
              id="standard-basic"
              label="Title"
              variant="standard"
              onChange={(e) => setTitle(e.target.value)}
              sx={{ width: 410, paddingBottom: 7, marginTop: 5 }}
            />
            <TextField
              id="standard-basic"
              label="Limit"
              variant="standard"
              sx={{ width: 410, paddingBottom: 7 }}
              onChange={(e) => setLimit(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label=""
              variant="standard"
              type="date"
              sx={{ width: 410, paddingBottom: 7 }}
              onChange={(e) => setDate(e.target.value)}
            />
            <Button
              onClick={status}
              variant="contained"
              sx={{ marginTop: 8, width: 100, backgroundColor: "#2d6590" }}
            >
              Add
            </Button>
          </form>
        </div>
        <div className="goals-right">
          <h1>Set goals</h1>
        </div>
      </div>
    </div>
  );
};

export default Goals;
