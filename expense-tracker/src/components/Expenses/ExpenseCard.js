import React, { useState } from "react";
import ExpenseMoney from "./ExpenseMoney";
import ExpenseDateContainer from "./ExpenseDateContainer";

export default function ExpenseCard(props) {
  return (
    <div className="col-12">
      <div
        className=" rounded-3   bg-dark text-light container mb-2 p-2 d-flex align-items-center flex-wrap"
        id="ExpenseCard"
      >
        <ExpenseDateContainer date={props.expense.Date} />

        <span className="fs-2  ms-2">{props.expense.Name}</span>

        <ExpenseMoney money={props.expense.Money} />
      </div>
    </div>
  );
}
