import React from "react";
import "../components/dashboard.css";
import { Link } from "react-router-dom";
// import { DonutChart } from "react-circle-chart";
import DonutChart from "react-donut-chart";
import { useNavigate } from "react-router-dom";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
  const [percentage, setPercentage] = React.useState(70);
  // const percentage = 10;

  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="dash-cat">
        <Link to="/subscriptions">
          <h4>Subscriptions</h4>
        </Link>
        <Link to="/subscriptions">
          <h4>Subscriptions</h4>
        </Link>
        <Link to="/subscriptions">
          <h4>Subscriptions</h4>
        </Link>
        <Link to="/subscriptions">
          <h4>Subscriptions</h4>
        </Link>
        <Link to="/subscriptions">
          <h4>Subscriptions</h4>
        </Link>
      </div>
      <div className="sections">
        <div className="chart-left">
          <h1>Welcome to your dashboard Jordan!</h1>
          <div className="progress">
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
