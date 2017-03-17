import React from 'react';
import TaskList from '../../shared/TaskList/TaskList';
import TaskInnerIssues from '../TaskInnerIssues/TaskInnerIssues';
import TaskInnerQuestions from '../TaskInnerQuestions/TaskInnerQuestions';
import TaskInnerNotes from '../TaskInnerNotes/TaskInnerNotes';
import TaskInnerWebsites from '../TaskInnerWebsites/TaskInnerWebsites';
import './TaskInnerBody.css';

const TaskInnerBody = () => (
  <div id='task-inner-body'>
    <TaskList />
    <TaskInnerIssues />
    <TaskInnerQuestions />
    <TaskInnerNotes />
    <TaskInnerWebsites />
  </div>
);

export default TaskInnerBody;