import React, { useState } from "react";

export default function ExpenseForm(props) {
  let nameClasses = "form-control mb-1 border border-dark shadow  ";
  let inputContainer = "d-flex ";
  let dateClasses = "form-control me-1 border border-dark shadow";
  let numberClasses = "form-control ms-1 border border-dark shadow";
  let btnClasses = "btn btn-dark";
  let btnDivClasses = "d-flex justify-content-center mt-1";

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
  //2024-02-14

  const [userInput, setUserInput] = useState({
    nameInput: "",
    dateInput: "2024-01-01",
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
      Date: new Date(userInput.dateInput).toDateString(),
      Money: userInput.amountInput,
    };
  }

  function clearForm() {
    setUserInput({
      ...userInput,
      nameInput: "",
      amountInput: "",
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();

    let newExpense = getObject();
    props.sendNewExpense(newExpense);

    clearForm();
  };

  return (
    <form
      className="col-12 col-sm-8 col-lg-6  container"
      onSubmit={submitHandler}
    >
      <input
        className={nameClasses}
        type="text"
        placeholder="Expense Name"
        value={userInput.nameInput}
        onChange={nameChangeHandler}
      />
      <div className={inputContainer}>
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
      </div>
      <div className={btnDivClasses}>
        <button className={btnClasses}>Add Expense</button>
      </div>
    </form>
  );
}
