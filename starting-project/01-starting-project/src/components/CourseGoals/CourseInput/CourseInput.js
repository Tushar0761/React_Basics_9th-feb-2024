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
    props.onAddGoal(enteredValue);
  };

  let formErrorClass = `border-danger bg-danger-subtle`;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control `}>
        <label>Course Goal</label>
        <input
          type="text"
          style={
            ({ color: isValid ? "black" : "red" },
            { borderColor: isValid ? "black" : "red" })
          }
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
