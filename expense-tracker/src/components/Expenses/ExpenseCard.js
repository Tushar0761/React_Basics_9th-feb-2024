import React, { useState } from "react";
import ExpenseMoney from "./ExpenseMoney";
import ExpenseDateContainer from "./ExpenseDateContainer";

export default function ExpenseCard(props) {
  const [name, setName] = useState(props.expense.Name);
  let count = 0;

  let clickHandler = () => {
    setName("changes");
  };

  let divHtml = (
    <div className="col-12">
      <div
        className="border border-dark rounded-3   bg-danger-subtle m-3 p-3 d-flex align-items-center"
        id="ExpenseCard"
      >
        <ExpenseDateContainer date={props.expense.Date} />

        <span className="fs-3 fw-bold">{name}</span>

        <ExpenseMoney money={props.expense.Money} />
      </div>
    </div>
  );

  return divHtml;
}
