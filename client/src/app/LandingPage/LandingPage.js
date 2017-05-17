import React, { Component } from 'react';
import MainHeader from '../MainHeader/MainHeader';
import App from '../App/App';
import './LandingPage.css';
import { Button } from 'semantic-ui-react';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <Button>
          Hi!
        </Button>
      </div>
    );
  }
};

export default LandingPage;
