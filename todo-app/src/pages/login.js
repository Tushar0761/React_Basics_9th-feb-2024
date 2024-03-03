import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginForm from "../components/login/LoginForm";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import RegisterForm from "../components/login/registerForm";

const Login = () => {
  function registerBtnHandler(event) {
    document
      .querySelector("#loginBtn")
      .classList.replace("btn-primary", "btn-secondary");

    event.target.classList.replace("btn-secondary", "btn-primary");
  }
  function loginBtnHandler(event) {
    document
      .querySelector("#registerBtn")
      .classList.replace("btn-primary", "btn-secondary");

    event.target.classList.replace("btn-secondary", "btn-primary");
  }

  return (
    <BrowserRouter>
      <Card className="h-100">
        <div className="card col-lg-4 col-md-6 col-sm-8 col-12   p-2 shadow-lg">
          <div className="btn-group">
            <Link
              to="./"
              id="loginBtn"
              className="btn btn-primary"
              onClick={loginBtnHandler}
            >
              Login
            </Link>
            <Link
              to="./register"
              id="registerBtn"
              className="btn btn-secondary"
              onClick={registerBtnHandler}
            >
              Register
            </Link>
          </div>
          <Routes>
            <Route index path="/" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </div>
      </Card>
    </BrowserRouter>
  );
};

export default Login;
