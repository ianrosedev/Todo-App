import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import { Segment, Button, Icon } from 'semantic-ui-react';

class LandingPage extends Component {
  render() {
    return (
      <div id='landing-page'>
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
              <em>It's easy to keep track of the things you need to get done!</em>
            </span>
            <Button
              as={Link}
              to='/users'
              color='green'
              size='large'
            >
              Login
            </Button>
          </div>
        </Segment>
      </div>
    );
  }
};

export default LandingPage;
