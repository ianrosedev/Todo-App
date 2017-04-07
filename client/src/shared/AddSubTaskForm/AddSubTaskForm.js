import React, { Component } from 'react';
import './AddSubTaskForm.css';
import { Modal, Button, Icon, Form, TextArea } from 'semantic-ui-react';

class addSubTaskForm extends Component {
  state = {
    isOpen: false,
    id: this.props.id,
    taskTitle: '',
    taskBody: ''
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleAddSubTask = (task) => (
    this.props.addSubTask(task)
  );

  handleSubmit = (e) => {
    e.preventDefault();

    this.handleAddSubTask({
      id: this.props._id,
      name: this.props.content.toUpperCase() + 'S',
      taskTitle: this.state.taskTitle,
      taskBody: this.state.taskBody
    });

    this.setState({
      isOpen: false,
      taskTitle: '',
      taskBody: ''
    });
  }

  render() {
    return (
      <Modal
        id='add-sub-task-form'
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
            content={`Add ${this.props.content}`}
            icon='plus'
            labelPosition='left'
            onClick={() => this.setState({isOpen: true})}
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
                  required={true}
                  value={this.state.taskTitle}
                  onChange={this.handleInputChange}
                  placeholder={`Your ${this.props.content}s name`}
                />
              </Form.Field>
              <Form.Field>
                <label><h4>{this.props.content}</h4></label>
                <TextArea
                  type='text'
                  name='taskBody'
                  required={true}
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

export default addSubTaskForm;
