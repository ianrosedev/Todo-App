import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import MainHeader from '../MainHeader/MainHeader';
import MainContent from '../MainContent/MainContent';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import PrivateRoute from '../../utils/PrivateRoute';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <Switch>
          <PrivateRoute path='/tasks' component={MainContent} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route exact path='/' render={() => (
            <Redirect to='/tasks' />
          )} />
          <Route render={() => (
            <h1 style={{textAlign: 'center'}}>Path Not Found!</h1>
          )} />
        </Switch>
      </div>
    );
  }
};

export default App;
