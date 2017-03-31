import React, { Component } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

class UserInfo extends Component {
  render() {
    const DATA = this.props.DATA;

    return (
      <Card>
        <Image src={DATA.IMAGE} />
        <Card.Content>
          <Card.Header>{DATA.USER_NAME}</Card.Header>
          <Card.Meta>Joined in {DATA.JOINED}</Card.Meta>
          <Card.Description>{DATA.SAYING}</Card.Description>
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
