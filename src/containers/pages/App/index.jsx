import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
