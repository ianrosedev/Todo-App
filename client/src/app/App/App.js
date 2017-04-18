import React, { Component } from 'react';
import MainHeader from '../MainHeader/MainHeader';
import MainSidebar from '../MainSidebar/MainSidebar';
import MainContent from '../MainContent/MainContent';
import Loading from '../../shared/Loading/Loading';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  state = { DATA: null };

  addNewTask = async (task) => {
    const response = await fetch(
      '/data/form/new',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(task),
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
        body: JSON.stringify(task),
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
  }

  deleteSubTask = async (id, taskType, subId) => {
    const response = await fetch(
      `/data/${id}/${taskType}/${subId}`,
      { method: 'DELETE' }
    );

    const data = await response.json();

    this.setState({DATA: data});
  }

  changeTaskImportance = async (id, color, level) => {
    const response = await fetch(
      `/data/importance/${id}/${color}/${level}`,
      { method: 'PUT' }
    );

    const data = await response.json();

    this.setState({DATA: data});
  }

  subTaskCompleted = async (id, taskType, subId) => {
    const response = await fetch(
      `/data/completed/${id}/${taskType}/${subId}`,
      { method: 'PUT' }
    );

    const data = await response.json();

    this.setState({DATA: data});
  }

  editTask = async (task) => {
    const response = await fetch(
      '/data/form/edit/main',
      {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(task),
      }
    );

    const data = await response.json();

    this.setState({DATA: data});
  }

  editSubTask = async (task) => {
    const response = await fetch(
      '/data/form/edit/sub',
      {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(task),
      }
    );

    const data = await response.json();

    this.setState({DATA: data});
  }

  componentDidMount = async () => {
    const response = await fetch('/data');
    const data = await response.json();

    this.setState({DATA: data});
  }

  render() {
    if (this.state.DATA) {
      return (
        <div>
          <MainHeader />
          <MainSidebar DATA={this.state.DATA.USER_INFO} />
          <MainContent
            DATA={this.state.DATA.TASK_LIST}
            addNewTask={this.addNewTask}
            addSubTask={this.addSubTask}
            deleteTask={this.deleteTask}
            deleteSubTask={this.deleteSubTask}
            changeTaskImportance={this.changeTaskImportance}
            subTaskCompleted={this.subTaskCompleted}
            editTask={this.editTask}
            editSubTask={this.editSubTask}
          />
        </div>
      );
    }
    return (
      <Loading />
    );
  }
};

export default App;
