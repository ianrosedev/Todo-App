import React from 'react';
import { shallow } from 'enzyme';
import UpdateProfileForm from './UpdateProfileForm';

describe('UpdateProfileForm', () => {
  const testProps = {
    name: '',
    image: '',
    saying: '',
    editProfile: () => {}
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UpdateProfileForm {...testProps} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
