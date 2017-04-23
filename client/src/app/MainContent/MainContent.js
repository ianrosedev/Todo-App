import React, { Component } from 'react';
import TaskOverview from '../../task-overview/TaskOverview/TaskOverview';
import TaskInner from '../../task-inner/TaskInner/TaskInner';
import './MainContent.css';

class MainContent extends Component {
  state = {
    isOverviewVisible: true,
    clickedTaskId: null
  };

  viewTaskBody = (id) => {
    this.setState({
      isOverviewVisible: false,
      clickedTaskId: id
    })
  };

  goBackHome = () => (
    this.setState({
      isOverviewVisible: true
    })
  );

  render() {
    return (
      <div id='main-content'>
        {this.state.isOverviewVisible ?
          <TaskOverview
            data={this.props.DATA}
            viewTaskBody={this.viewTaskBody}
            addNewTask={this.props.addNewTask}
            deleteTask={this.props.deleteTask}
            editTask={this.props.editTask}
            changeTaskImportance={this.props.changeTaskImportance}
          />
          :
          <TaskInner
            data={
              this.props.DATA.filter(t =>
                t.TASK_ID === this.state.clickedTaskId
              )[0]
            }
            _id={this.state.clickedTaskId}
            goBackHome={this.goBackHome}
            addSubTask={this.props.addSubTask}
            deleteTask={this.props.deleteTask}
            deleteSubTask={this.props.deleteSubTask}
            editSubTask={this.props.editSubTask}
            subTaskCompleted={this.props.subTaskCompleted}
          />
        }
      </div>
    );
  }
};

export default MainContent;
