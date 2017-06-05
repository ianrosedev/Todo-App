import React from 'react';
import { shallow } from 'enzyme';
import TaskOverviewBody from './TaskOverviewBody';

describe('TaskOverviewBody', () => {
  const testProps = {
    data: []
  }

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TaskOverviewBody {...testProps} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
