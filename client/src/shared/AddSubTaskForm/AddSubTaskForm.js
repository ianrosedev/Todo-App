import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddSubTaskForm.css';
import { Modal, Button, Icon, Form, TextArea } from 'semantic-ui-react';

const propTypes = {
  _id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  addSubTask: PropTypes.func.isRequired
};

class AddSubTaskForm extends Component {
  state = {
    isOpen: false,
    taskTitle: '',
    taskBody: ''
  };

  title = this.props.name.slice(0, -1);

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
      name: this.title.toUpperCase() + 'S',
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
            content={this.title}
            icon='plus'
            labelPosition='left'
            onClick={() => this.setState({isOpen: true})}
          />
        }
      >
        <Modal.Header>
          New {this.title}
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label><h4>{this.title}:</h4></label>
                <input
                  type='text'
                  name='taskTitle'
                  value={this.state.taskTitle}
                  onChange={this.handleInputChange}
                  placeholder={`Your ${this.title}`}
                  required={true}
                />
              </Form.Field>
              <Form.Field>
                <label><h4>About your {this.title}:</h4></label>
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
};

AddSubTaskForm.propTypes = propTypes;

export default AddSubTaskForm;
