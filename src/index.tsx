import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import HooksUseCase from "./pages/HooksUseCase";
import ReduxUseCase from "./pages/ReduxUseCase";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-example" element={<Login />} />
        <Route path="/hooks-use-case" element={<HooksUseCase />} />
        <Route path="/redux-use-case" element={<ReduxUseCase />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
