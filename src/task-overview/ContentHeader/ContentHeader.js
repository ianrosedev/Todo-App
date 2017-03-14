import React from 'react';
import './ContentHeader.css';
import { Menu, Button } from 'semantic-ui-react';

const ContentHeader = () => (
  <Menu borderless id='content-header'>
    <Menu.Item header>
      <Button
        basic
        color='green'
        content='Add Task'
        icon='plus'
        labelPosition='left'
      />
    </Menu.Item>
  </Menu>
);

export default ContentHeader;
