import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/default.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserContextProvider } from "./context/UserContext";
import { LessonsProvider } from "./context/LessonsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <LessonsProvider>
        <App />
      </LessonsProvider>
    </UserContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
