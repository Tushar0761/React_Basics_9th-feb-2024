import React, { useState } from "react";

export default function ExpenseForm() {
  let nameClasses = "form-control m-1 border border-dark shadow ";
  let dateClasses = "form-control m-1 border border-dark shadow";
  let numberClasses = "form-control m-1 border border-dark shadow";
  let btnClasses = "btn btn-primary";

  //   ____ approach 1 for managing states

  /* 

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const nameChangeHandler = (event) => setName(event.target.value);
  const dateChangeHandler = (event) => setDate(event.target.value);
  const amountChangeHandler = (event) => setAmount(event.target.value);
 */

  //   ____ approach 2 for managing states

  const [userInput, setUserInput] = useState({
    nameInput: "",
    dateInput: "",
    amountInput: "",
  });

  const nameChangeHandler = (event) => {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, nameInput: event.target.value };
    });
  };
  const dateChangeHandler = (event) =>
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, dateInput: event.target.value };
    });
  const amountChangeHandler = (event) =>
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, amountInput: event.target.value };
    });

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className="col-6 container" onSubmit={submitHandler}>
      <input
        className={nameClasses}
        type="text"
        placeholder="Expense Name"
        onChange={nameChangeHandler}
      />
      <input className={dateClasses} onChange={dateChangeHandler} type="Date" />
      <input
        className={numberClasses}
        onChange={amountChangeHandler}
        type="Number"
        placeholder="Amount ₹"
      />
      <button className={btnClasses}>Add Expense</button>
    </form>
  );
}
