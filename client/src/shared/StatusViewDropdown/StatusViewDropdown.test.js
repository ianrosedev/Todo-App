import React from 'react';
import { shallow } from 'enzyme';
import StatusViewDropdown from './StatusViewDropdown';

describe('StatusViewDropdown', () => {
  const testProps = {
    status: '',
    updateStatusView: () => {}
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StatusViewDropdown {...testProps} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
