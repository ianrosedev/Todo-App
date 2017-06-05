import React from 'react';
import { shallow } from 'enzyme';
import ConfirmDelete from './ConfirmDelete';

describe('ConfirmDelete', () => {
  const testProps = {
    children: React.createElement('div', null, null),
    handleDelete: () => {}
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ConfirmDelete {...testProps} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
