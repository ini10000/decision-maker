import React from "react";
import { BrowserRouter } from "react-router-dom";

import Main from "./routes/main";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}
