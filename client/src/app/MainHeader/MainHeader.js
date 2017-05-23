import React from 'react';
import { Link } from 'react-router-dom';
import { client } from '../../utils/Client';
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
        {(client.isLoggedIn()) ? (
          <Button
            as={Link}
            to='/logout'
            basic
            color='blue'
          >
            Logout
          </Button>
        ) : (
          null
        )}
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default MainHeader;
