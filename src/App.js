import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Signup from './Pages/Signup'
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={
          Home}/>
          <Route path='/react-websit' component={Signup}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
