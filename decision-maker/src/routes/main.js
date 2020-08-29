import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../views/Home";
import Result from "../views/Result";

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/result" component={Result} />
        <Route path="/" component={Home} />
      </Switch>
    </main>
  );
}
