import React from 'react';
import { shallow } from 'enzyme';
import UserInfo from './UserInfo';

describe('UserInfo', () => {
  const testProps = {
    data: {
      IMAGE: 'Awesome/Link',
      USER_NAME: 'Foo',
      JOINED: 1970,
      SAYING: 'I love testing!'
    },
    editProfile: () => {}
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <UserInfo {...testProps} />
    );
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('renders the users image', () => {
    expect(
      wrapper.html()
    ).toContain(testProps.data.IMAGE);
  });

  it('renders the users name', () => {
    expect(
      wrapper.html()
    ).toContain(testProps.data.USER_NAME);
  });

  it('renders the users joined date', () => {
    expect(
      wrapper.html()
    ).toContain(testProps.data.JOINED);
  });

  it('renders the users saying', () => {
    expect(
      wrapper.html()
    ).toContain(testProps.data.SAYING);
  });

  it('contains the `Edit Profile` button', () => {
    expect(
      wrapper.html()
    ).toContain('Edit Profile');
  });
});
