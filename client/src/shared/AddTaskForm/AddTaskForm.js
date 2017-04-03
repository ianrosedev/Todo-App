import React from 'react';
import './AddTaskForm.css';
import { Modal, Button, Form, TextArea } from 'semantic-ui-react';

const AddTaskForm = (props) => (
  <Modal
    id='add-task-form'
    closeOnDimmerClick={false}
    trigger={
      <Button
        color='blue'
        content={props.content}
        icon='plus'
        labelPosition='left'
      />
    }
  >
  <Modal.Header>
    {props.content}
  </Modal.Header>
  <Modal.Content>
    <Modal.Description>
      <Form>
        <Form.Field>
          <label>Task Name</label>
          <input placeholder='Your tasks name' />
        </Form.Field>
        <Form.Field>
          <label>Task</label>
          <TextArea placeholder='Tell us more...' />
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

export default AddTaskForm;
