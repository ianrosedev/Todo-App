import React, { Component } from 'react';
import ImportanceDropdown from '../../shared/ImportanceDropdown/ImportanceDropdown';
import './AddNewTaskForm.css';
import { Modal, Button, Form, Icon } from 'semantic-ui-react';

class AddNewTaskForm extends Component {
  state = {
    isOpen: false,
    taskTitle: '',
    taskImportance: {
      color: '',
      level: null
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

  handleAddNewTask = (task) => (
    this.props.addNewTask(task)
  );

  handleSubmit = (e) => {
    e.preventDefault();

    this.handleAddNewTask({
      taskTitle: this.state.taskTitle,
      taskImportance: {
        color: this.state.taskImportance.color,
        level: this.state.taskImportance.level
      }
    });

    this.setState({
      isOpen: false,
      taskTitle: '',
      taskImportance: {
        color: '',
        importance: null
      }
    });
  }

  render() {
    return (
      <Modal
        id='add-new-task-form'
        open={this.state.isOpen}
        closeIcon={
          <Icon
            name='close'
            onClick={() => this.setState({isOpen: false})}
          />
        }
        trigger={
          <Button
            color='green'
            content='Add Task'
            icon='plus'
            labelPosition='left'
            onClick={() => this.setState({isOpen: true})}
          />
        }
      >
        <Modal.Header>
          Add Task
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
                  placeholder='Your Tasks name'
                />
              </Form.Field>
              <Form.Field>
                <label><h4>Task Importance:</h4></label>
                <ImportanceDropdown
                  icon={
                    <Icon
                      name='square'
                      size='large'
                      color={this.state.taskImportance.color || 'grey'}
                    />
                  }
                  handleChangeTaskImportance={
                    this.handleChangeTaskImportance
                  }
                />
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
}

export default AddNewTaskForm;
