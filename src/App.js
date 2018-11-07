import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import Home from './routes/home/index.jsx';
import User from './routes/user/index.jsx';
import Detail from './routes/detail/index.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/user" exact component={ User } />
          <Route path="/detail" exact component={ Detail } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
