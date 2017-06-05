import React from 'react';
import { shallow } from 'enzyme';
import UpdateTaskForm from './UpdateTaskForm';

describe('UpdateTaskForm', () => {
  const testProps = {
    _id: 0,
    color: 'red',
    taskTitle: '',
    editTask: () => {}
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UpdateTaskForm {...testProps} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
