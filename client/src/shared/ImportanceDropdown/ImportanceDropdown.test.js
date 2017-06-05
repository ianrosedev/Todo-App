import React from 'react';
import { shallow } from 'enzyme';
import ImportanceDropdown from './ImportanceDropdown';

describe('ImportanceDropdown', () => {
  const testProps = {
    children: React.createElement('div', null, null),
    handleChangeTaskImportance: () => {}
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ImportanceDropdown {...testProps} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
