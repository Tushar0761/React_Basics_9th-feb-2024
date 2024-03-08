import Button from "../UI/Button";
import { Link } from "react-router-dom";

import FormInput from "../UI/FormInput";
import { useEffect, useReducer, useState } from "react";

const RegisterForm = () => {
  const [error, setError] = useState([false, ""]);

  const registerHandler = (e) => {
    // Validation
    e.preventDefault();

    if (
      !UserInputs.nameValue ||
      !UserInputs.emailValue ||
      !UserInputs.passwordValue ||
      !UserInputs.confirmPasswordValue
    ) {
      setError([true, "All fields are required"]);
      return;
    } else setError([false]);

    if (UserInputs.passwordValue !== UserInputs.confirmPasswordValue) {
      setError([true, "Password and Confirm Password must match"]);
      return;
    } else setError([false]);

    // Save data to local storage
    const userData = {
      name: UserInputs.nameValue,
      email: UserInputs.emailValue,
      password: UserInputs.passwordValue,
    };

    let all_users_data =
      JSON.parse(localStorage.getItem("all_users_data")) || [];

    if (checkUserPresent(all_users_data, userData)) {
      alert("Email is already present.");
      return;
    }

    all_users_data.push(userData);

    localStorage.setItem("all_users_data", JSON.stringify(all_users_data));

    alert("Registration successful!");
  };

  function checkUserPresent(array, user) {
    return array.find((i) => i.email === user.email) ? true : false;
  }

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
      {error[0] && <div className="alert alert-danger">{error[1]}</div>}
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

        <Button
          attributes={{
            className: "btn btn-warning",
            type: "submit",
          }}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
