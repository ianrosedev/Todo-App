import React, { Component } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

class UserInfo extends Component {
  render() {
    return (
      <Card>
        <Image src='http://placekitten.com/209/209' />
        <Card.Content>
          <Card.Header>Elliot</Card.Header>
          <Card.Meta>Joined in 2017</Card.Meta>
          <Card.Description>Do or do not, there is no try.</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button
            size='tiny'
            content='Edit Profile'
            icon='edit'
            labelPosition='left'
          />
        </Card.Content>
      </Card>
    );
  }
}

export default UserInfo;
