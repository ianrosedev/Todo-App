import React from 'react';
import TaskHeader from '../TaskHeader/TaskHeader';
import Task from '../Task/Task';
import { Segment } from 'semantic-ui-react';

const TaskModule = (props) => {
const tasks = props.data
    .filter((x, i) => i !== 0)
    .map((task, i) => (
      <Task
        key={i}
        title={task.title}
        body={task.body}
      />
    )
  );

  return (
    <Segment.Group>
      <TaskHeader
        name={props.data[0].name}
        icon={props.data[0].icon}
      />
      <Segment.Group>
        {tasks}
      </Segment.Group>
    </Segment.Group>
  );
};

export default TaskModule;
