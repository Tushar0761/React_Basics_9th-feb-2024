import React, { useState, useRef } from "react";

export default function ExpenseForm(props) {
  let nameClasses = "form-control mb-1 border border-dark shadow  ";
  let inputContainer = "d-flex ";
  let dateClasses = "form-control me-1 border border-dark shadow";
  let numberClasses = "form-control ms-1 border border-dark shadow";
  let btnClasses = "btn btn-dark";
  let btnDivClasses = "d-flex justify-content-center mt-1";

  //----------------------Day 8
  const expenseNameRef = useRef("");
  const expenseDateRef = useRef("");
  const expenseAmountRef = useRef("");

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

  // ------------------Day 8
  /* 
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
  }; */

  function getObject() {
    return {
      id: new Date().getTime(),
      Name: expenseNameRef.current.value,
      Date: new Date(expenseDateRef.current.value).toDateString(),
      Money: expenseAmountRef.current.value,
    };
  }

  function clearForm() {
    expenseNameRef.current.value = "";
    expenseDateRef.current.value = "";
    expenseAmountRef.current.value = "";

    /* setUserInput({
      ...userInput,
      nameInput: "",
      amountInput: "",
    }); */
  }

  function saveToLocalStorage(expense) {
    let expenseArray = JSON.parse(localStorage.getItem("Expense_Array")) || [];
    console.log(expenseArray);

    if (expenseArray.length === 0) {
      expenseArray = [expense];
      console.log("from if ");
    } else {
      expenseArray.unshift(expense);
    }
    localStorage.setItem("Expense_Array", JSON.stringify(expenseArray));
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      expenseNameRef.current.value === "" ||
      expenseDateRef.current.value === "" ||
      expenseAmountRef.current.value === ""
    ) {
      alert("Please provide all data.");
      return false;
    }

    let newExpense = getObject();
    props.sendNewExpense(newExpense);

    saveToLocalStorage(newExpense);

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
        ref={expenseNameRef}
        // value={userInput.nameInput}
        // onChange={nameChangeHandler}
      />
      <div className={inputContainer}>
        <input
          className={dateClasses}
          type="Date"
          ref={expenseDateRef}
          // onChange={dateChangeHandler}
          // value={userInput.dateInput}
        />
        <input
          className={numberClasses}
          type="Number"
          placeholder="Amount ₹"
          ref={expenseAmountRef}
          // onChange={amountChangeHandler}
          // value={userInput.amountInput}
        />
      </div>
      <div className={btnDivClasses}>
        <button className={btnClasses}>Add Expense</button>
      </div>
    </form>
  );
}
