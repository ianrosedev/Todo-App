import React from 'react';
import PropTypes from 'prop-types';
import AddSubTaskForm from '../../shared/AddSubTaskForm/AddSubTaskForm';
import { Segment,  Icon } from 'semantic-ui-react';

const propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

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

TaskHeader.propTypes = propTypes;

export default TaskHeader;
