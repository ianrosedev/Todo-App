import React from 'react';
import TaskDescription from '../TaskDescription/TaskDescription'

const TaskList = (props) => {
  const tasks = props.data.map((task) => (
    <TaskDescription
      _id={task.TASK_ID}
      key={task.TASK_ID}
      color={task.COLOR}
      task={task.TASK_NAME}
      {...props}
    />
  ));

  return (
    <div id='task-list'>
      {tasks}
    </div>
  );
};

export default TaskList;
