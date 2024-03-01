import React, { useEffect, useState, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState(false);
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  let userInputReducer = (prevState, action) => {
    if (action.type === "user_email_input") {
      return {
        ...prevState,
        emailValue: action.value,
        isValidEmail: action.value.includes("@"),
      };
    } else if (action.type === "user_password_input") {
      return {
        ...prevState,
        passwordValue: action.value,
        isValidPassword: action.value.trim().length > 6,
      };
    }
    return {
      emailValue: "",
      isValidEmail: false,
      passwordValue: "",
      isValidPassword: false,
    };
  };

  const [userInput, dispatchUserInput] = useReducer(userInputReducer, {
    emailValue: "",
    isValidEmail: undefined,
    passwordValue: "",
    isValidPassword: undefined,
  });

  useEffect(() => {
    // setFormIsValid(
    //   enteredPassword.trim().length > 6 && enteredEmail.includes("@")
    // );

    setFormIsValid(userInput.isValidEmail && userInput.isValidPassword);

    return () => {
      console.log("cleanUp ,time out canel");
    };
  }, [userInput.emailValue, userInput.passwordValue]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchUserInput({ type: "user_email_input", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchUserInput({
      type: "user_password_input",
      value: event.target.value,
    });
  };

  const validateEmailHandler = (event) => {
    // setEmailIsValid(enteredEmail.includes("@"));
    dispatchUserInput({
      type: "user_email_input",
      value: event.target.value,
    });
  };

  const validatePasswordHandler = (event) => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchUserInput({
      type: "user_password_input",
      value: event.target.value,
    });
  };

  let ctx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(userInput.emailValue, userInput.passwordValue);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            userInput.isValidEmail === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={userInput.emailValue}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            userInput.isValidPassword === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={userInput.passwordValue}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
