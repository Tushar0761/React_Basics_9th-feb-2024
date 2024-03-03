import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import RegisterForm from "./components/login/registerForm";

function App() {
  return (
    <div className={`App bg-light`} style={{ height: "100vh", width: "100vw" }}>
      <Login />
    </div>
  );
}

export default App;
