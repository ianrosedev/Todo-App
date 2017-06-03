import React from 'react';
import PropTypes from 'prop-types';
import TaskDescription from '../TaskDescription/TaskDescription';
import { Icon } from 'semantic-ui-react';

const propTypes = {
  data: PropTypes.array.isRequired
};

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
      changeTaskImportance={props.changeTaskImportance}
      editTask={props.editTask}
      deleteTask={props.deleteTask}
      viewTaskBody={props.viewTaskBody}
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

TaskList.propTypes = propTypes;

export default TaskList;
