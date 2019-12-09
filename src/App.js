import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import About from './pages/About'
import Projects from './pages/Projects';
import Contact from './pages/Contact'
function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
