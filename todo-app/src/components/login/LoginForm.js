import { useReducer, useState } from "react";
import Button from "../UI/Button";
import FormInput from "../UI/FormInput";

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

function validatePass(pass) {
  return pass !== "";
}

const LoginForm = () => {
  const [errorState, setError] = useState([false, ""]);

  function reducerFun(prevState, action) {
    switch (action.type) {
      case "email-input":
        return {
          ...prevState,
          emailIsValid: validateEmail(action.val),
          emailValue: action.val,
        };
      case "password-input":
        return {
          ...prevState,
          passwordIsValid: validatePass(action.val),
          passwordValue: action.val,
        };
      case "email-blur":
        setError([
          !prevState.emailIsValid || !prevState.passwordIsValid,
          "Please provide valid Email.",
        ]);
      case "password-blur":
        setError([
          !prevState.emailIsValid || !prevState.passwordIsValid,
          "Please provide valid password.",
        ]);
    }
    return prevState;
  }

  const [state, dispatchFn] = useReducer(reducerFun, {
    emailValue: "",
    emailIsValid: false,
    passwordValue: "",
    passwordIsValid: false,
    formValid: true,
  });

  function submitHandler(e) {
    e.preventDefault();
    if (!state.emailIsValid || !state.passwordIsValid) {
      setError([true, "Please provide valid Inputs."]);
      return;
    }
  }

  return (
    <div className="py-3">
      <div className={`${errorState[0] ? "" : " d-none"} alert alert-danger`}>
        {errorState[1]}
      </div>

      <form onSubmit={submitHandler}>
        <FormInput
          formAttr={{
            type: "email",
            className: "form-control",
            placeholder: "eg: abc@123.com",
            required: true,
            onChange: (e) => {
              dispatchFn({ type: "email-input", val: e.target.value });
            },
            onBlur: (e) => {
              dispatchFn({ type: "email-blur" });
            },
          }}
          name="Email"
        ></FormInput>

        <FormInput
          formAttr={{
            type: "password",
            className: "form-control",
            required: true,
            onChange: (e) => {
              dispatchFn({ type: "password-input", val: e.target.value });
            },
            onBlur: (e) => {
              dispatchFn({ type: "password-blur" });
            },
          }}
          name="Password"
        ></FormInput>

        <Button
          attributes={{
            className: "btn btn-warning",
            type: "submit",
          }}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
