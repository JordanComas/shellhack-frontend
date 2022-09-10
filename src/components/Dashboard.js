import React from "react";
import "../components/dashboard.css";
import { Link } from "react-router-dom";
// import { DonutChart } from "react-circle-chart";
import DonutChart from "react-donut-chart";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  // const [totalExpenses, setTotalExpenses] = React.useState(0);
  // const [listExpenses, setListExpenses] = React.useState([
  //   { value: 20 },
  //   { value: 45 },
  //   { value: 50 },
  // ]);

  // setTotalExpenses([{}]);
  const navigate = useNavigate();

  const chartLink = () => {
    navigate("/");
    console.log("clicked");
  };

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

      {/* <ul>
        {listExpenses
          .sort((a, b) => {
            return b.value - a.value;
          })
          .map((expense) => {
            return <li>{expense.amount}</li>;
          })}
      </ul> */}
      <div className="sections">
        <div className="chart-left">
          <h1>Welcome to your dashboard Jordan!</h1>
          <h1>ADD GOAL BAR Here</h1>
        </div>
        <div className="chart">
          <DonutChart
            // className="donutchart"
            // colors={["#2d6590", "#daeaf6"]}
            // onClick={(item, toggled) => (toggled ? item : navigate("/"))}
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
                label: "Savings",
                value: 1000,
              },
              {
                label: "Empty",
                value: 10,
                isEmpty: true,
              },
            ]}
          />
          ;
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
