import React, { useState } from "react";

import Header from "../components/header";
import Input from "../components/input";

import "../App.css";
import { Link } from "react-router-dom";

export default function App() {
  const [options, setOptions] = useState([]);
  const handleChange = (e) => {
    setOptions({ ...options, [e.target.name]: e.target.value });
  };
  const inputs = ["A", "B", "C"];

  return (
    <div>
      <Header />
      <div className="body">
        <Input
          label="Question"
          name="Question"
          placeholder="Q: Enter your question here"
          id="Question"
        />
        <h2 className="input-label">Options</h2>
        {inputs.map((input, index) => {
          return (
            <Input
              key={index}
              name={input}
              onChange={handleChange}
              placeholder={`${input}:`}
            />
          );
        })}
        <div className="button-container">
          <button
            onClick={() => {
              inputs.push("D");
            }}
            className="btn"
          >
            <span className="plus">+</span> Option
          </button>
          <Link to={{ pathname: "/result", state: options }}>
            <input
              type="submit"
              value="Answer!"
              className="submit-button btn"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
