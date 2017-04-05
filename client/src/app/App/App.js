import React, { Component } from 'react';
import MainHeader from '../MainHeader/MainHeader';
import MainSidebar from '../MainSidebar/MainSidebar';
import MainContent from '../MainContent/MainContent';
import Loading from '../../shared/Loading/Loading';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  state = { DATA: null };

  deleteTask = async (id) => {
    const response = await fetch(
      `/data/${id}`,
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
            deleteTask={this.deleteTask}
            changeTaskImportance={this.changeTaskImportance}
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
