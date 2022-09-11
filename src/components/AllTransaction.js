import React from "react";
import axios from "axios";
import { get } from "../services/service";

const AllTransactions = () => {
  const [getTransactions, setGetTransactions] = React.useState({});

  const getAllTransactions = async () => {
    let response = await get("/transactions/my-transactions");

    console.log(response.data);
    setGetTransactions(response.data);
  };

  React.useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <div>
      {getTransactions.map((transaction) => {
        return (
          <div>
            {transaction.title}
            {transaction.amount}
          </div>
        );
      })}
    </div>
  );
};

export default AllTransactions;
