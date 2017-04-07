import React from 'react';
import AddSubTaskForm from '../../shared/AddSubTaskForm/AddSubTaskForm';
import { Segment,  Icon } from 'semantic-ui-react';

const TaskHeader = (props) => {
  const buttonName = props.name.slice(0, -1);

  return (
    <Segment>
      <Icon name={props.icon} />
      <strong>{props.name}</strong>
      <AddSubTaskForm
        content={buttonName}
        {...props}
      />
    </Segment>
  );
};

export default TaskHeader;
