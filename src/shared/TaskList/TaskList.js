import React from 'react';
import TaskDescription from '../TaskDescription/TaskDescription'

const TaskList = (props) => {
  const data = props.data.map((data, i) => (
    <TaskDescription
      key={i}
      color={data.color}
      task={data.task}
    />
  ));

  return (
    <div id='task-list'>
      {data}
    </div>
  );
};

export default TaskList;
