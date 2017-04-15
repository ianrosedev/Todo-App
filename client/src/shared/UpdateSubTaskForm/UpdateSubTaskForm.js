import React, { Component } from 'react';
import './UpdateSubTaskForm.css';
import { Modal, Button, Icon, Form, TextArea } from 'semantic-ui-react';

class UpdateSubTaskForm extends Component {
  colors = ['black', 'red', 'orange', 'green', 'blue'];

  state = {
    isOpen: false,
    title: this.props.title,
    body: this.props.body
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleEditSubTask = (task) => (
    this.props.editSubTask(task)
  );

  handleSubmit = (e) => {
    e.preventDefault();

    this.handleEditSubTask({
      id: this.props._id,
      taskTitle: this.props.taskTitle,
      subId: this.props.subId,
      title: this.state.title,
      body: this.state.body
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
            onClick={() => this.setState({
              isOpen: true,
              title: this.props.title,
              body: this.props.body
            })}
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
                  name='title'
                  required={true}
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  placeholder='Your Tasks Name'
                />
              </Form.Field>
              <Form.Field>
                <label><h4>Task:</h4></label>
                <TextArea
                  type='text'
                  name='body'
                  required={true}
                  value={this.state.body}
                  onChange={this.handleInputChange}
                  placeholder='Your Task...'
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

export default UpdateSubTaskForm;
