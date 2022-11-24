import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { store } from "../src/pages/ReduxUseCase/store";
import { Provider } from "react-redux";
import "./index.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import HooksUseCase from "./pages/HooksUseCase";
import ReduxUseCase from "./pages/ReduxUseCase";
import Counter from "./pages/ReduxUseCase/Counter";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-example" element={<Login />} />
          <Route path="/hooks-use-case" element={<HooksUseCase />} />

          <Route path="/redux-use-case" >
            <Route index element={<ReduxUseCase />} />
            <Route path="/redux-use-case/counter" element={<Counter />} />
          </Route>

        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
