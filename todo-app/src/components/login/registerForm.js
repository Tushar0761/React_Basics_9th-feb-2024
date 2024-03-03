import Button from "../UI/Button";
import { Link } from "react-router-dom";

import FormInput from "../UI/FormInput";
import { useEffect, useReducer, useState } from "react";

const RegisterForm = () => {
  const [error, setError] = useState("");

  const registerHandler = (e) => {
    // Validation
    e.preventDefault();

    if (
      !UserInputs.nameValue ||
      !UserInputs.emailValue ||
      !UserInputs.passwordValue ||
      !UserInputs.confirmPasswordValue
    ) {
      setError("All fields are required");
      return;
    }

    if (UserInputs.passwordValue !== UserInputs.confirmPasswordValue) {
      setError("Password and Confirm Password must match");
      return;
    }

    // Save data to local storage
    const userData = {
      name: UserInputs.nameValue,
      email: UserInputs.emailValue,
      password: UserInputs.passwordValue,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Registration successful!");

    window.location.href = "./";
  };

  function reducerFn(state, action) {
    switch (action.type) {
      case "name-change":
        return { ...state, nameValue: action.value };
      case "email-change":
        return { ...state, emailValue: action.value };
      case "password-change":
        return { ...state, passwordValue: action.value };
      case "confirm-change":
        return { ...state, confirmPasswordValue: action.value };
    }
  }

  const [UserInputs, setUserInputs] = useReducer(reducerFn, {
    nameValue: "",
    emailValue: "",
    passwordValue: "",
    confirmPasswordValue: "",
  });

  return (
    <div className="py-3 ">
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={registerHandler}>
        <FormInput
          formAttr={{
            value: UserInputs.nameValue,
            onChange: (e) =>
              setUserInputs({ type: "name-change", value: e.target.value }),
            type: "text",
            className: "form-control",
            placeholder: "Firstname Lastname",
            required: true,
          }}
          name="Name"
        ></FormInput>
        <FormInput
          formAttr={{
            value: UserInputs.emailValue,
            onChange: (e) =>
              setUserInputs({ type: "email-change", value: e.target.value }),
            type: "email",
            className: "form-control",
            placeholder: "eg: abc@123.com",
            required: true,
          }}
          name="Email"
        ></FormInput>
        <FormInput
          formAttr={{
            value: UserInputs.passwordValue,
            onChange: (e) =>
              setUserInputs({ type: "password-change", value: e.target.value }),
            type: "password",
            className: "form-control",
            required: true,
          }}
          name="Password"
        ></FormInput>
        <FormInput
          formAttr={{
            value: UserInputs.confirmPasswordValue,
            onChange: (e) =>
              setUserInputs({ type: "confirm-change", value: e.target.value }),
            type: "password",
            className: "form-control",
            required: true,
          }}
          name="Confirm Password"
        ></FormInput>

        <Button classes="btn btn-warning" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
