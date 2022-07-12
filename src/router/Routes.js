import React from "react";
import EdinaRegular from "../views/all-home-version/EdinaRegular";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import EdinaRtl from "../views/all-home-version/EdinaRtl";
import Preview from "../views/Preview";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={Preview} />
          <Route exact path="/regular" component={EdinaRegular} />
          <Route exact path="/rtl" component={EdinaRtl} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
