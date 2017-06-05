import React from 'react';
import { shallow } from 'enzyme';
import ExpandedViewModal from './ExpandedViewModal';

describe('ExpandedViewModal', () => {
  const testProps = {
    title: '',
    body: ''
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ExpandedViewModal {...testProps} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
