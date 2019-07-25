import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <CssBaseline>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    </CssBaseline>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Button variant="contained" color="primary">
        Material button
      </Button>
    </div>
  );
}

function Dashboard() {
  return (
    <React.Fragment>
      <Header />

      <div>
        <h2>Dashboard page</h2>
      </div>
    </React.Fragment>
  );
}

function About() {
  return (
    <React.Fragment>
      <Header />

      <h2>About</h2>
    </React.Fragment>
  );
}

function Topic({ match }) {
  return (
    <React.Fragment>
      <Header />

      <h3>Requested Param: {match.params.id}</h3>
    </React.Fragment>
  );
}

function Topics({ match }) {
  return (
    <React.Fragment>
      <Header />

      <div>
        <h2>Topics</h2>

        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>

        <Route path={`${match.path}/:id`} component={Topic} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    </React.Fragment>
  );
}

function Header() {
  return (
    <ul className="Header">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}

export default App;
