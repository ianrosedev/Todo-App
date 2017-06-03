import React from 'react';
import AddSubTaskForm from '../../shared/AddSubTaskForm/AddSubTaskForm';
import { Segment,  Icon } from 'semantic-ui-react';

const TaskHeader = (props) => (
  <Segment>
    <Icon name={props.icon} />
    <strong>{props.name}</strong>
    <AddSubTaskForm
      _id={props._id}
      name={props.name}
      addSubTask={props.addSubTask}
    />
  </Segment>
);

export default TaskHeader;
