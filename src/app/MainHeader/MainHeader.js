import React from 'react';
import './MainHeader.css';
import { Menu, Icon, Button } from 'semantic-ui-react';

const MainHeader = () => (
  <Menu
    id='main-header'
    borderless
  >
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
