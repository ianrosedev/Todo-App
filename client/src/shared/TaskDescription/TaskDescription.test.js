import React from 'react';
import { shallow } from 'enzyme';
import TaskDescription from './TaskDescription';

describe('TaskDescription', () => {
  const testProps = {
    _id: 0,
    task: '',
    color: 'red',
    viewTaskBody: () => {},
    changeTaskImportance: () => {},
    deleteTask: () => {},
    editTask: () => {}
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TaskDescription {...testProps} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
