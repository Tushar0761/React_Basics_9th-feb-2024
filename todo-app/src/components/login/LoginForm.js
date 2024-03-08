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
        break;

      case "password-input":
        return {
          ...prevState,
          passwordIsValid: validatePass(action.val),
          passwordValue: action.val,
        };
        break;

      case "email-blur":
        setError([
          !prevState.emailIsValid || !prevState.passwordIsValid,
          "Please provide valid Email.",
        ]);
        break;
      case "password-blur":
        setError([
          !prevState.emailIsValid || !prevState.passwordIsValid,
          "Please provide valid password.",
        ]);
        break;
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

    let all_users_data =
      JSON.parse(localStorage.getItem("all_users_data")) || [];

    if (!checkUserPresent(all_users_data, { email: state.emailValue })) {
      alert("Email Not Found. Please Register");
      return;
    }

    if (
      !checkPassword(all_users_data, {
        email: state.emailValue,
        password: state.passwordValue,
      })
    ) {
      alert("Email id and Password is wrong.");
      return;
    }

    localStorage.setItem("User_logged_in", "1");

    window.location.href = "./dashboard";
  }

  function checkUserPresent(array, user) {
    return array.find((i) => i.email === user.email) ? true : false;
  }

  function checkPassword(array, user) {
    let currentUser = array.find((i) => i.email === user.email);
    console.log(currentUser);
    console.log(user);
    if (currentUser.password !== user.password) {
      console.log("password did not match");
      return false;
    }
    console.log("password matched");
    return true;
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
