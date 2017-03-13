import React, { Component } from 'react';

class MainContent extends Component {
  render() {
    const mainContentStyle = {
      float: 'left',
      margin: 30
    };

    return (
      <div style={mainContentStyle}>
        <p>Todo: Content Header</p>
        <p>Todo: Task List</p>
      </div>
    );
  }
}

export default MainContent;
