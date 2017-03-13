import React from 'react';
import { Menu, Icon, Button } from 'semantic-ui-react';

const mainHeaderStyle = {
  marginBottom: 0
};

const MainHeader = () => (
  <Menu borderless style={mainHeaderStyle}>
    <Menu.Item header>
      <Icon name='list' />
      Todo List
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item>
        <Button
          basic
          color='blue'
        >
          Logout
        </Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default MainHeader;
