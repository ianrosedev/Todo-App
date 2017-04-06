import React, { Component } from 'react';
import './AddTaskForm.css';
import { Modal, Button, Form, TextArea } from 'semantic-ui-react';

class AddTaskForm extends Component {
  state = {
    taskTitle: '',
    taskBody: ''
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

  render() {
    return (
      <Modal
        id='add-task-form'
        open={this.state.isOpen}
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
                <label><h4>{this.props.content} Name</h4></label>
                <input
                  type='text'
                  name='taskTitle'
                  value={this.state.taskTitle}
                  onChange={this.handleInputChange}
                  placeholder={`Your ${this.props.content}s name`}
                />
              </Form.Field>
              <Form.Field>
                <label><h4>{this.props.content}</h4></label>
                <TextArea
                  name='taskBody'
                  value={this.state.taskBody}
                  onChange={this.handleInputChange}
                  placeholder='Tell us more...'
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

export default AddTaskForm;
