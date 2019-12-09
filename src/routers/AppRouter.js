import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../App.css";
import App from '../App'
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const AppRouter = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />

      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
