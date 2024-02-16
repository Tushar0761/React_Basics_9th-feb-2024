import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);

      return;
    }
    setIsValid(true);
    setEnteredValue("");
    props.onAddGoal(enteredValue);
  };

  let formErrorClass = `border-danger bg-danger-subtle shadow`;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid ? "" : formErrorClass}`}>
        <label>Course Goal</label>
        <input
          type="text"
          style={
            ({ color: isValid ? "black" : "red" },
            { borderColor: isValid ? "black" : "red" })
          }
          value={enteredValue}
          placeholder={!isValid && "Please Enter Goal"}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
