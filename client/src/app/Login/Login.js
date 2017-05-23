import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { client } from '../../utils/Client';
import './Login.css';
import { Segment, Button, Icon } from 'semantic-ui-react';

class Login extends Component {
  state = {
    loginInProgress: false,
    shouldRedirect: false
  };

  performLogin = () => {
    this.setState({ loginInProgress: true });
    client.login().then(() => (
      this.setState({ shouldRedirect: true })
    ));
  };

  render() {
    if (this.state.shouldRedirect) {
      return (
        <Redirect to='/tasks' />
      );
    }
    return (
      <div id='login'>
        <Segment
          id='segment'
          textAlign='center'
        >
          <div>
            <span>
              <Icon name='list' size='huge' />
              <h1>Todo List</h1>
            </span>
            <span id='quote'>
              <em>Keep track of the things that you need to get done!</em>
            </span>
            {(this.state.loginInProgress) ? (
              <Button
                disabled
                color='green'
                size='large'
              >
                Loading...
              </Button>
            ) : (
              <Button
                color='green'
                size='large'
                onClick={this.performLogin}
              >
                Login
              </Button>
            )}
          </div>
        </Segment>
      </div>
    );
  }
};

export default Login;
