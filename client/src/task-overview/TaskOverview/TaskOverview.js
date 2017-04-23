import React from 'react';
import TaskOverviewHeader from '../TaskOverviewHeader/TaskOverviewHeader';
import TaskOverviewBody from '../TaskOverviewBody/TaskOverviewBody';
import './TaskOverview.css';

const TaskOverview = (props) => (
  <div id='task-overview'>
    <TaskOverviewHeader addNewTask={props.addNewTask} />
    <TaskOverviewBody
      data={props.data}
      viewTaskBody={props.viewTaskBody}
      deleteTask={props.deleteTask}
      editTask={props.editTask}
      changeTaskImportance={props.changeTaskImportance}
    />
  </div>
);

export default TaskOverview;
