import React from "react";
import "../components/goals.css";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { get, post, remove } from "../services/service";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Goals = () => {
  const [title, setTitle] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const [date, setDate] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [goals, setGoals] = React.useState([]);
  const [current, setCurrent] = React.useState("");
  const [placeholder, setPlaceholder] = React.useState(0);
  const [id, setId] = React.useState("");
  const [flag, setFlag] = React.useState(false);

  const navigate = useNavigate();

  const navigateGoals = () => {
    navigate("/goals");
    window.location.reload(true);
  };

  React.useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const response = await get(`/goals/my-goals`);
      console.log(response.data);
      setGoals(response.data);
    } catch (err) {
      setStatus(err.message);
    }
  };

  const Status = async (e) => {
    e.preventDefault();
    if (goals.length < 4) {
      if (!title || !amount || !date) {
        setStatus("Please enter valid credentials");
      } else {
        try {
          let response = await post("/goals/create", {
            title: title,
            date: date,
            amount: amount,
          });
          // console.log(process.env);
          //localStorage.setItem("token", response.data.token);
          //localStorage.setItem("id", response.data.id);
          // setStatus("welcome");
          navigateGoals();
        } catch (err) {
          console.error(err.message);
          // setStatus("type or username is incorrect");
        }
      }
    } else {
      setStatus("Please limit the number of goals to 3");
    }
  };

  const updateGoal = async (id) => {
    console.log(placeholder);
    console.log(id);
    // e.preventDefault();
    // setCurrent(current + placeholder);
    try {
      let response = await post(`/goals/update-goal/${id}`, {
        current: current + placeholder,
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  const show = (params) => {
    setId(params._id);
    setFlag(!flag);
  };

  return (
    <div className="goals-page">
      <div className="goals-cat">
        <Link to="/alltransactions">
          <h4>All Transactions</h4>
        </Link>
        <Link to="/categories">
          <h4>Categories</h4>
        </Link>
        <Link to="/subscriptions">
          <h4>Subscriptions</h4>
        </Link>
        <Link to="/goals">
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
              label="Amount"
              variant="standard"
              sx={{ width: 410, paddingBottom: 7 }}
              onChange={(e) => setAmount(e.target.value)}
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
              onClick={Status}
              variant="contained"
              sx={{ marginTop: 8, width: 100, backgroundColor: "#2d6590" }}
            >
              Add
            </Button>
          </form>
          {status}
        </div>
        <div className="goals-right">
          <h1>My goals</h1>
          {goals &&
            goals.map((goal, index) => {
              return (
                <div onClick={show}>
                  <h3>{goal.title}</h3>
                  <CircularProgressbar
                    value={0}
                    text={`${current}/${goal.amount}`}
                    styles={{
                      path: {
                        // Path color
                        stroke: `rgba(62, 152, 199, ${goal.amount / 100})`,
                      },
                      text: {
                        // Text color
                        fill: "#2d6590",
                        // Text size
                        fontSize: "16px",
                      },
                    }}
                  />
                  {goal._id === id && flag ? (
                    <div>
                      <label>Update your goal</label>
                      <input
                        type="number"
                        value={placeholder}
                        onChange={(e) => setPlaceholder(e.target.value)}
                      />
                      <button onClick={() => updateGoal(goal._id)}>
                        submit
                      </button>
                    </div>
                  ) : (
                    " "
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Goals;
