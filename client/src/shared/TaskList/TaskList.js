import React from 'react';
import TaskDescription from '../TaskDescription/TaskDescription'

const TaskList = (props) => {

  const tasksSortedByImportance = props.data.sort((a, b) => (
    a.IMPORTANCE.LEVEL - b.IMPORTANCE.LEVEL
  ));

  const tasks = tasksSortedByImportance.map((task) => (
    <TaskDescription
      _id={task.TASK_ID}
      key={task.TASK_ID}
      color={task.IMPORTANCE.COLOR}
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
