import React, { useState } from "react";
import ExpenseMoney from "./ExpenseMoney";
import ExpenseDateContainer from "./ExpenseDateContainer";

export default function ExpenseCard(props) {
  return (
    <div className="col-12" id={props.expense.id}>
      <div
        className=" rounded-3   bg-dark text-light container mb-2 p-2 d-flex align-items-center flex-wrap"
        id="ExpenseCard"
      >
        <ExpenseDateContainer date={props.expense.Date} />

        <span className="fs-2  ms-2">{props.expense.Name}</span>

        <ExpenseMoney money={props.expense.Money} />
        <div className="d-flex flex-wrap p-1 row ms-2 me-2 ">
          <button
            className="btn btn-danger mt-1"
            onClick={() => {
              props.deleteFunction(props.expense.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
