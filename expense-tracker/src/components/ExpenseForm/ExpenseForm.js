import React, { useState } from "react";

export default function ExpenseForm(props) {
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

  const nameChangeHandler = (event) =>
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, nameInput: event.target.value };
    });

  const dateChangeHandler = (event) => {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, dateInput: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, amountInput: event.target.value };
    });
  };

  function getObject() {
    return {
      Name: userInput.nameInput,
      Date: new Date(userInput.dateInput),
      Amount: userInput.amountInput,
    };
  }

  function clearForm() {
    setUserInput({
      nameInput: "",
      amountInput: "",
      dateInput: "",
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();

    let newExpense = getObject();
    props.sendNewExpense(newExpense);

    clearForm();
  };

  return (
    <form className="col-6 container" onSubmit={submitHandler}>
      <input
        className={nameClasses}
        type="text"
        placeholder="Expense Name"
        value={userInput.nameInput}
        onChange={nameChangeHandler}
      />
      <input
        className={dateClasses}
        onChange={dateChangeHandler}
        type="Date"
        value={userInput.dateInput}
      />
      <input
        className={numberClasses}
        onChange={amountChangeHandler}
        type="Number"
        placeholder="Amount ₹"
        value={userInput.amountInput}
      />
      <button className={btnClasses}>Add Expense</button>
    </form>
  );
}
