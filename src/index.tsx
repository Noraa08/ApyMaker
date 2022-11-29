import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import Error from "./pages/Error";
import Home from "./pages/Home";
import HooksUseCase from "./pages/HooksUseCase";
import Login from "./pages/Login";
import ReduxUseCase from "./pages/ReduxUseCase";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-example/*" element={<Login />} />
          <Route path="/hooks-use-case/*" element={<HooksUseCase />} />
          <Route path="/redux-use-case/*" element={<ReduxUseCase />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
  </React.StrictMode>
);
