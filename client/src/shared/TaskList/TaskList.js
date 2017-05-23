import React from 'react';
import TaskDescription from '../TaskDescription/TaskDescription';
import { Icon } from 'semantic-ui-react';

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

  const displayTasks = (tasks.length > 0) ?
    tasks :
    (
      <div>
        <Icon
          style={{marginLeft: 30}}
          name='arrow up'
          size='huge'
        />
        <h1>Add a Task!</h1>
      </div>
    );

  return (
    <div>
      {displayTasks}
    </div>
  );
};

export default TaskList;
