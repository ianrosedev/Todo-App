import React from 'react';
import { shallow } from 'enzyme';
import TaskHeader from './TaskHeader';

describe('TaskHeader', () => {
  const testProps = {
    _id: 0,
    name: '',
    icon: 'square',
    addSubTask: () => {}
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TaskHeader {...testProps} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
