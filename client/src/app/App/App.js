import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import MainHeader from '../MainHeader/MainHeader';
import Login from '../Login/Login';
import MainContent from '../MainContent/MainContent';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/users' component={MainContent} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
};

export default App;
