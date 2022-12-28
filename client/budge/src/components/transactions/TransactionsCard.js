import React from "react";
import { useState } from "react";
import { currencyFormatter } from "../../utils/format";
import DeleteTransaction from "./DeleteTransaction";
import "./reansactionCars.css";
const TransactionsCard = ({ exp }) => {
  const [userExpenses, setUserExpenses] = useState(exp);
  return (
    <div className="expense-card">
      <div>
        <p>{userExpenses.formatted_date}</p>
      </div>

      <div>
        <p>{userExpenses.transaction_name}</p>
      </div>
      <div>
        <p>{userExpenses.category_name} </p>
      </div>
      <div>
        <p>{currencyFormatter.format(userExpenses.amount)}</p>
      </div>
      <div>
        <DeleteTransaction expenseId={userExpenses.transaction_id} />
      </div>
    </div>
  );
};

export default TransactionsCard;
