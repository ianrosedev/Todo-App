import React from 'react';
import TaskDescription from '../TaskDescription/TaskDescription'

const TaskList = (props) => {
  const tasks = props.data.map((data) => (
    <TaskDescription
      key={data.TASK_ID}
      TASK_ID={data.TASK_ID}
      color={data.color}
      task={data.task}
      getTaskId={props.getTaskId}
    />
  ));

  return (
    <div id='task-list'>
      {tasks}
    </div>
  );
};

export default TaskList;
