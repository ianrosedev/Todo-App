import React from 'react';
import { shallow } from 'enzyme';
import TaskOverviewHeader from './TaskOverviewHeader';

describe('TaskOverviewHeader', () => {
  const testProps = {
    addNewTask: () => {}
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TaskOverviewHeader {...testProps} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
