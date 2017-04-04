import React from 'react';
import './AddTaskForm.css';
import { Modal, Button, Form, TextArea } from 'semantic-ui-react';

const AddTaskForm = (props) => (
  <Modal
    id='add-task-form'
    closeIcon='close'
    closeOnDimmerClick={false}
    trigger={
      <Button
        color='blue'
        content={`Add ${props.content}`}
        icon='plus'
        labelPosition='left'
      />
    }
  >
  <Modal.Header>
    Add {props.content}
  </Modal.Header>
  <Modal.Content>
    <Modal.Description>
      <Form>
        <Form.Field>
          <label>{props.content} Title</label>
          <input placeholder={`Your ${props.content}s name`} />
        </Form.Field>
        <Form.Field>
          <label>{props.content}</label>
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
