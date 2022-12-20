import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import Gallery from "./Gallery";
import Quizes from "./Quizes";
import Fortune from "./Fortune";
import ShortenerLink from "./ShortenerLink";
import DearDiary from "./DearDiary";
import HelpPage from "./HelpPage";
import GahNameh from "./GahNameh";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/Gallery" component={Gallery} />
        <Route exact path="/Quizes" component={Quizes} />
        <Route exact path="/Fortune" component={Fortune} />
        <Route exact path="/ShortenerLink" component={ShortenerLink} />
        <Route exact path="/DearDiary" component={DearDiary} />
        <Route exact path="/HelpPage" component={HelpPage} />
        <Route exact path="/GahNameh" component={GahNameh} />
      </Switch>
    </HashRouter>
  </div>
);
