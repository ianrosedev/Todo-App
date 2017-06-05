import React from 'react';
import { shallow } from 'enzyme';
import AddNewTaskForm from './AddNewTaskForm';

describe('AddNewTaskForm', () => {
  const testProps = {
    addNewTask: () => {}
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddNewTaskForm {...testProps} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
