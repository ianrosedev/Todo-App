import React from 'react';
import { shallow } from 'enzyme';
import TaskList from './TaskList';

describe('TaskList', () => {
  const testProps = {
    data: []
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TaskList {...testProps} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
