import React from 'react';
import UpdateProfileForm from '../../shared/UpdateProfileForm/UpdateProfileForm';
import { Card, Image } from 'semantic-ui-react';

const UserInfo = (props) => {
  return (
    <Card>
      <Image
        src={props.data.IMAGE}
        width={209}
        height={209} 
      />
      <Card.Content>
        <Card.Header>
          {props.data.USER_NAME}
        </Card.Header>
        <Card.Meta>
          Joined in {props.data.JOINED}
        </Card.Meta>
        <Card.Description>
          {props.data.SAYING}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <UpdateProfileForm
          name={props.data.USER_NAME}
          image={props.data.IMAGE}
          saying={props.data.SAYING}
          editProfile={props.editProfile}
        />
      </Card.Content>
    </Card>
  );
};

export default UserInfo;
