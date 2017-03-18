import React from 'react';
import { Segment, Button, Icon } from 'semantic-ui-react';

const TaskHeader = (props) => {
  const buttonName = `Add ${props.name.slice(0, -1)}`;

  return (
    <Segment>
      <Icon name={props.icon} />
      <strong>{props.name}</strong>
      <Button
        size='small'
        floated='right'
        color='blue'
        icon='plus'
        labelPosition='left'
        content={buttonName}
      />
    </Segment>
  );
};

export default TaskHeader;
