import React, { Component } from 'react';
import ImportanceDropdown from '../../shared/ImportanceDropdown/ImportanceDropdown';
import './AddNewTaskForm.css';
import { Modal, Button, Form, Icon } from 'semantic-ui-react';

class AddNewTaskForm extends Component {
  state = {
    taskTitle: '',
    taskImportance: {
      color: '',
      importance: null
    }
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });

    // Close modal here!
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleNewTask(this.state);
  }

  handleNewTask = (task) => (
    this.props.newTask(task)
  );

  handleChangeTaskImportance = (color, level) => {
    this.setState({
      taskImportance: {
        color,
        level
      }
    });
  }

  render() {
    return (
      <Modal
        id='add-new-task-form'
        closeIcon='close'
        closeOnDimmerClick={false}
        trigger={
          <Button
            color='green'
            content={`Add ${this.props.content}`}
            icon='plus'
            labelPosition='left'
          />
        }
      >
        <Modal.Header>
          Add {this.props.content}
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label><h4>{this.props.content} Name:</h4></label>
                <input
                  type='text'
                  name='taskTitle'
                  value={this.state.taskTitle}
                  onChange={this.handleInputChange}
                  placeholder={`Your ${this.props.content}s name`}
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
