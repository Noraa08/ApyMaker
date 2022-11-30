import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import LoginUseCase from "./pages/LoginUseCase";
import HooksUseCase from "./pages/HooksUseCase";
import ReduxUseCase from "./pages/ReduxUseCase";
import Error from "./pages/Error";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          {/* 注意，这里父级后面必须加上 /* 用于匹配后续的任意子路由，否则按照 react-router 的路由匹配方式是无法匹配上内部嵌套的子路由的 */}
          <Route path="/login-example/*" element={<LoginUseCase />} />
          <Route path="/hooks-use-case/*" element={<HooksUseCase />} />
          <Route path="/redux-use-case/*" element={<ReduxUseCase />} />

          <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
