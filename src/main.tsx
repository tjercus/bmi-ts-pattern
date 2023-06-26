import React from "react";
import ReactDOM from "react-dom/client";
import View from "./View";
import "./index.css";
import { makeBmi } from "./model";

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <View bmiCategory={makeBmi(19.4)} />
  </React.StrictMode>
);
