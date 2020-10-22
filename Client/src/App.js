import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Container from "./Container/Container";
import Admin from "./Admin/Admin";

const App = (props) => {
  const [idContainer, setIdContainer] = useState(0);

  const menuHandler = (index) => {
    setIdContainer(index);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Header handler={menuHandler} />
            <Container index={idContainer} />
          </div>
        </Route>
        <Route exact path="/Admin2202">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
