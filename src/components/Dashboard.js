import React from "react";
import "../components/dashboard.css";
import { Link } from "react-router-dom";
// import { DonutChart } from "react-circle-chart";
import DonutChart from "react-donut-chart";
import { useNavigate } from "react-router-dom";
import { get, post, remove } from "../services/service";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
  const [goals, setGoals] = React.useState([]);
  const [percentage, setPercentage] = React.useState(0);
  const [status, setStatus] = React.useState("");
  const [getTransactions, setGetTransactions] = React.useState([]);
  // const percentage = 10;

  const navigate = useNavigate();

  React.useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
    fetchGoals();
    getAllTransactions();
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

  const getAllTransactions = async () => {
    let response = await get("/transactions/my-transactions");

    console.log(response.data);
    setGetTransactions(response.data);
  };

  return (
    <div className="dashboard">
      <div className="dash-cat">
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
      <div className="sections">
        <div className="chart-left">
          <h1>Welcome to your dashboard Jordan!</h1>
          <div className="progress">
            <div className="progress-section">
              {/* {goals.map((goal) => {
                return (
                  <div>
                   <h3>{title}</h3>
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={{
                        path: {
                          // Path color
                          stroke: `rgba(62, 152, 199, ${percentage / 100})`,
                        },
                        text: {
                          // Text color
                          fill: "#2d6590",
                          // Text size
                          fontSize: "16px",
                        },
                      }}
                    />
                  </div>
                );
              })} */}
            </div>
            <div className="progress-section">
              <h3>Saving for a car</h3>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `rgba(62, 152, 199, ${percentage / 100})`,
                  },
                  text: {
                    // Text color
                    fill: "#2d6590",
                    // Text size
                    fontSize: "16px",
                  },
                }}
              />
            </div>
            <div className="progress-section">
              <h3>Saving for a car</h3>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `rgba(62, 152, 199, ${percentage / 100})`,
                  },
                  text: {
                    // Text color
                    fill: "#2d6590",
                    // Text size
                    fontSize: "16px",
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="chart">
          <DonutChart
            // className="donutchart"
            // colors={["#2d6590", "#daeaf6"]}
            // onClick={(item, toggled) => (toggled ? item : navigate("/"))}
            // width={800}
            // height={100}
            clickToggle={false}
            data={[
              {
                label: "Stocks",
                value: 500,
              },
              {
                label: "Food",
                value: 300,
              },
              {
                label: "Accesories",
                value: 1000,
              },
              {
                label: "Empty",
                value: 90,
                isEmpty: true,
              },
            ]}
          />
          <DonutChart
            // className="donutchart"
            colors={["red", "green"]}
            // onClick={(item, toggled) => (toggled ? item : navigate("/"))}
            // width={800}
            // height={100}
            clickToggle={false}
            data={[
              {
                label: "Income",
                value: 500,
              },
              {
                label: "Outcome",
                value: 300,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
