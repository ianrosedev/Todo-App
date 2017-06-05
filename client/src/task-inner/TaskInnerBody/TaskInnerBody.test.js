import React from 'react';
import { shallow } from 'enzyme';
import TaskInnerBody from './TaskInnerBody';

describe('TaskInnerBody', () => {
  const testProps = {
    _id: 0,
    data: {ISSUES: [], QUESTIONS: [], NOTES: [], WEBSITES: []},
    status: '',
    addSubTask: () => {},
    deleteSubTask: () => {},
    editSubTask: () => {},
    subTaskCompleted: () => {}
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TaskInnerBody {...testProps} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
