import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { AboutPage } from "./About";
import { PortfolioPage } from "./PortfolioPage";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <AboutPage />;
}

function Portfolio() {
  return <PortfolioPage />;
}

function App() {
  return (
    
    <Router>
      <div>
        <nav>
          <ul className="nav">
            <li className="nav">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav">
              <NavLink to="/portfolio/">Portfolio</NavLink>
            </li>
            <li className="nav">
              <NavLink to="/about/">About</NavLink>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/portfolio/" component={Portfolio} />
        <Route path="/about/" component={About} />
      </div>
    </Router>
  );
}

export default App;