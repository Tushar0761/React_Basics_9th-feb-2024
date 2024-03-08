import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RegisterForm from "./components/login/registerForm";

import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div
        className={`App bg-light`}
        style={{ height: "100vh", width: "100vw" }}
      >
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
