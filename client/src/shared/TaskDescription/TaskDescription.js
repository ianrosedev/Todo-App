import React, { Component } from 'react';
import './TaskDescription.css';
import { Segment, Icon, Dropdown } from 'semantic-ui-react';

class TaskDescription extends Component {
  handleGetTaskId = () => (
    this.props.getTaskId(this.props._id)
  );

  handleDeleteTask = () => (
    this.props.deleteTask(this.props._id)
  );

  handleChangeTaskImportance = (color, level) => (
    this.props.changeTaskImportance(this.props._id, color, level)
  );

  render() {
    const importanceColors = ['black', 'red', 'orange', 'green', 'blue'];

    const importanceColorsDropdown = importanceColors.map((color, i) => (
      <Dropdown.Item
        className='dropdown'
        id={color}
        key={i}
        text={color[0].toUpperCase() + color.slice(1)}
        onClick={
          () => this.handleChangeTaskImportance(color, i)
        }
      />
    ));

    return (
      <Segment
        id='task-description'
        color={this.props.color}
      >
        <Dropdown
          icon={
            <Icon
              name='square'
              color={this.props.color}
            />
          }
        >
          <Dropdown.Menu>
            {importanceColorsDropdown}
          </Dropdown.Menu>
        </Dropdown>
        <strong onClick={this.handleGetTaskId}>
          {this.props.task}
        </strong>
        <Icon
          name='remove'
          onClick={this.handleDeleteTask}
        />
        <Icon name='checkmark' />
        <Icon name='edit' />
      </Segment>
    );
  }
}

export default TaskDescription;
