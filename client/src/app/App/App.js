import React, { Component } from 'react';
import MainHeader from '../MainHeader/MainHeader';
import MainContent from '../MainContent/MainContent';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <MainContent/>
      </div>
    );
  }
};

export default App;
