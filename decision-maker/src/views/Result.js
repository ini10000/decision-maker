import React from "react";

import Header from "../components/header";
// import Input from "../components/input";

import "../App.css";
import { Link } from "react-router-dom";

export default function Result(props) {
  const options = props.location.state;
  const items = [];
  const randomProperty = function (obj) {
    let keys = Object.keys(obj);
    return obj[keys[(keys.length * Math.random()) << 0]];
  };
  const selectedItem = randomProperty(options);
  for (const option in options) {
    items.push(
      <h3
        key={option}
        className={selectedItem === options[option] ? "selected" : ""}
      >
        {option}. {options[option]}
      </h3>
    );
  }

  return (
    <div className="results-container">
      <Header />
      <div>
        <div className="result-text-container">
          <h1 className="result-header-dark">Easy Decision Maker</h1>
          <p>
            When the decision is too hard or too simple use the Easy Decision
            Maker
          </p>
        </div>
        <div className="results-page-container">
          <div className="results">
            <h2 className="result-header">Hello?</h2>
            {items}
          </div>
          <div className="buttons">
            <div>
              <Link to="/">
                <button className="btn button">Ask Again?</button>
              </Link>
            </div>
            <div>
              <button className="btn button">
                Ask another random question?
              </button>
            </div>
            <div>
              <button
                onClick={() => document.location.reload()}
                className="btn button"
              >
                Get another random answer?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
