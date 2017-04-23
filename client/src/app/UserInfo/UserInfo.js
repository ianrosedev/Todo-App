import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

const UserInfo = (props) => {
  const data = props.data;

  return (
    <Card>
      <Image src={data.IMAGE} />
      <Card.Content>
        <Card.Header>
          {data.USER_NAME}
        </Card.Header>
        <Card.Meta>
          Joined in {data.JOINED}
        </Card.Meta>
        <Card.Description>
          {data.SAYING}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          size='tiny'
          icon='edit'
          labelPosition='left'
          content='Edit Profile'
        />
      </Card.Content>
    </Card>
  );
};

export default UserInfo;
