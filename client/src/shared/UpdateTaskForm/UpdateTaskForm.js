import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImportanceDropdown from '../../shared/ImportanceDropdown/ImportanceDropdown';
import './UpdateTaskForm.css';
import { Modal, Button, Form, Icon } from 'semantic-ui-react';

const propTypes = {
  _id: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  taskTitle: PropTypes.string.isRequired,
  editTask: PropTypes.func.isRequired
};

class UpdateTaskForm extends Component {
  colors = ['black', 'red', 'orange', 'green', 'blue'];

  state = {
    isOpen: false,
    taskTitle: this.props.taskTitle,
    taskImportance: {
      color: this.props.color,
      level: this.colors.indexOf(this.props.color)
    }
  };

  handleChangeTaskImportance = (color, level) => {
    this.setState({
      taskImportance: {
        color,
        level
      }
    });
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleEditTask = (task) => (
    this.props.editTask(task)
  );

  handleSubmit = (e) => {
    e.preventDefault();

    this.handleEditTask({
      id: this.props._id,
      taskTitle: this.state.taskTitle,
      taskImportance: {
        color: this.state.taskImportance.color,
        level: this.state.taskImportance.level
      }
    });

    this.setState({isOpen: false});
  }

  render() {
    return (
      <Modal
        id='update-task-form'
        open={this.state.isOpen}
        closeIcon={
          <Icon
            name='close'
            onClick={() => {this.setState({isOpen: false})}}
          />
        }
        trigger={
          <Icon
            name='edit'
            onClick={() => this.setState({isOpen: true})}
          />
        }
      >
        <Modal.Header>
          Edit Task
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label><h4>Task Name:</h4></label>
                <input
                  type='text'
                  name='taskTitle'
                  required={true}
                  value={this.state.taskTitle}
                  onChange={this.handleInputChange}
                  placeholder='Your Tasks Name'
                />
              </Form.Field>
              <Form.Field>
                <label><h4>Task Importance:</h4></label>
                <ImportanceDropdown
                  handleChangeTaskImportance={
                    this.handleChangeTaskImportance
                  }
                >
                  <Icon
                    name='square'
                    size='large'
                    color={this.state.taskImportance.color}
                  />
                </ImportanceDropdown>
              </Form.Field>
              <Button
                type='submit'
                color='green'
              >
                Submit
              </Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
};

UpdateTaskForm.propTypes = propTypes;

export default UpdateTaskForm;
