import React from "react";
import axios from "axios";
import { get } from "../services/service";
import "./alltransactions.css";
import { Link } from "react-router-dom";

const AllTransactions = () => {
  const [getTransactions, setGetTransactions] = React.useState([]);

  const getAllTransactions = async () => {
    let response = await get("/transactions/my-transactions");

    console.log(response.data);
    setGetTransactions(response.data);
  };

  React.useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <div className="trans-page">
      <div className="trans-cat">
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
      {getTransactions &&
        getTransactions.map((transaction) => {
          return (
            <div className="trans-box">
              <div className="trans-col">
                <h5>Title</h5>
                <p>{transaction.title}</p>
              </div>
              <div className="trans-col">
                <h5>Amount</h5>
                <p>${transaction.amount}</p>
              </div>
              <div className="trans-col">
                <h5>Category</h5>
                <p>{transaction.category}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AllTransactions;
