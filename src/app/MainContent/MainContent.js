import React, { Component } from 'react';
import TaskOverview from '../../task-overview/TaskOverview/TaskOverview';
import TaskInner from '../../task-inner/TaskInner/TaskInner';
import './MainContent.css';

import FAKE_DATA from '../../FAKE_DATA';

class MainContent extends Component {
  state = {
    isOverviewVisible: true,
    clickedTaskId: null
  };

  changeOverviewVisibility = () => (
    this.setState({
      isOverviewVisible: !this.state.isOverviewVisible
    })
  );

  getTaskId = (id) => {
    this.setState({
      isOverviewVisible: false,
      clickedTaskId: id
    })
  };

  render() {
    return (
      <div id='main-content'>
        {this.state.isOverviewVisible ?
          <TaskOverview
            data={FAKE_DATA.TASK_LIST}
            getTaskId={this.getTaskId}
          />
          :
          <TaskInner
            data={
              FAKE_DATA.TASK_LIST.filter(t => t.TASK_ID === this.state.clickedTaskId)[0]
            }
            _id={this.state.clickedTaskId}
            goBackHome={this.changeOverviewVisibility}
          />
        }
      </div>
    );
  }
}

export default MainContent;
