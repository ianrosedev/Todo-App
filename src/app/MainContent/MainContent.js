/* eslint-disable */

import React, { Component } from 'react';
import TaskOverview from '../../task-overview/TaskOverview/TaskOverview';
import TaskInner from '../../task-inner/TaskInner/TaskInner';
import './MainContent.css';

class MainContent extends Component {
  render() {
    return (
      <div id='main-content'>
        <TaskInner />
      </div>
    );
  }
}

export default MainContent;
