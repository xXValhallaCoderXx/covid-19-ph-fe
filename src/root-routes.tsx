import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import WeeklyReport from "./pages/weekly-report";

const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/weekly-report">
          <WeeklyReport />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default RootRoutes;
