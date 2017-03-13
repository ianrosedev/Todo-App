import React, { Component } from 'react';
import TaskOverview from '../TaskOverview/TaskOverview'
import './MainContent.css';

class MainContent extends Component {
  render() {
    return (
      <div id='main-content'>
        <TaskOverview />
      </div>
    );
  }
}

export default MainContent;
