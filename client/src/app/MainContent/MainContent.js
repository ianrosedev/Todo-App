import React, { Component } from 'react';
import MainSidebar from '../MainSidebar/MainSidebar';
import TaskOverview from '../../task-overview/TaskOverview/TaskOverview';
import TaskInner from '../../task-inner/TaskInner/TaskInner';
import Loading from '../../shared/Loading/Loading';
import './MainContent.css';

class MainContent extends Component {
  state = {
    DATA: null,
    isOverviewVisible: true,
    clickedTaskId: null
  };

  addNewTask = async (task) => {
    const response = await fetch(
      '/data/form/new',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(task)
      }
    );

    const data = await response.json();

    this.setState({DATA: data});
  };

  addSubTask = async (task) => {
    const response = await fetch(
      '/data/form/sub',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(task)
      }
    );

    const data = await response.json();

    this.setState({DATA: data});
  };

  deleteTask = async (id) => {
    const response = await fetch(
      `/data/${id}`,
      { method: 'DELETE' }
    );

    const data = await response.json();

    this.setState({DATA: data});
  };

  deleteSubTask = async (id, taskType, subId) => {
    const response = await fetch(
      `/data/${id}/${taskType}/${subId}`,
      { method: 'DELETE' }
    );

    const data = await response.json();

    this.setState({DATA: data});
  };

  editTask = async (task) => {
    const response = await fetch(
      '/data/form/edit/main',
      {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(task)
      }
    );

    const data = await response.json();

    this.setState({DATA: data});
  };

  editSubTask = async (task) => {
    const response = await fetch(
      '/data/form/edit/sub',
      {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(task)
      }
    );

    const data = await response.json();

    this.setState({DATA: data});
  };

  editProfile = async (profile) => {
    const response = await fetch(
      '/data/form/edit/profile',
      {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(profile)
      }
    );

    const data = await response.json();

    this.setState({DATA: data});
  };

  changeTaskImportance = async (id, color, level) => {
    const response = await fetch(
      `/data/importance/${id}/${color}/${level}`,
      { method: 'PUT' }
    );

    const data = await response.json();

    this.setState({DATA: data});
  };

  subTaskCompleted = async (id, taskType, subId) => {
    const response = await fetch(
      `/data/completed/${id}/${taskType}/${subId}`,
      { method: 'PUT' }
    );

    const data = await response.json();

    this.setState({DATA: data});
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

  componentDidMount = async () => {
    const response = await fetch('/data');
    const data = await response.json();

    this.setState({DATA: data});
  }

  render() {
    if (!this.state.DATA) {
      return (
        <Loading />
      );
    }
    return (
      <div>
        <MainSidebar
          data={this.state.DATA.USER_INFO}
          editProfile={this.editProfile}
        />
        <div id='main-content'>
          {this.state.isOverviewVisible ?
            <TaskOverview
              data={this.state.DATA.TASK_LIST}
              viewTaskBody={this.viewTaskBody}
              addNewTask={this.addNewTask}
              deleteTask={this.deleteTask}
              editTask={this.editTask}
              changeTaskImportance={this.changeTaskImportance}
            />
            :
            <TaskInner
              data={
                this.state.DATA.TASK_LIST.find(t =>
                  t.TASK_ID === this.state.clickedTaskId
                )
              }
              _id={this.state.clickedTaskId}
              goBackHome={this.goBackHome}
              addSubTask={this.addSubTask}
              deleteTask={this.deleteTask}
              deleteSubTask={this.deleteSubTask}
              editSubTask={this.editSubTask}
              subTaskCompleted={this.subTaskCompleted}
            />
          }
        </div>
      </div>
    );
  }
};

export default MainContent;
