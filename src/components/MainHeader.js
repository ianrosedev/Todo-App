import React from 'react';
import { Menu, Icon, Button } from 'semantic-ui-react';

const MainHeader = () => (
  <Menu borderless>
    <Menu.Item header>
      <Icon name='list' />
      Todo List
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item>
        <Button basic color='blue' floated='right'>Logout</Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default MainHeader;
