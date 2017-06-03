import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UpdateProfileForm.css';
import { Modal, Button, Icon, Form } from 'semantic-ui-react';

const propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  saying: PropTypes.string.isRequired,
  editProfile: PropTypes.func.isRequired
};

class UpdateProfileForm extends Component {
  state = {
    isOpen: false,
    name: this.props.name,
    image: this.props.image,
    saying: this.props.saying
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleEditProfile = (profile) => (
    this.props.editProfile(profile)
  );

  handleSubmit = (e) => {
    e.preventDefault();

    this.handleEditProfile({
      name: this.state.name,
      image: this.state.image,
      saying: this.state.saying
    });

    this.setState({isOpen: false});
  }

  render() {
    return (
      <Modal
        id='update-profile-form'
        open={this.state.isOpen}
        closeIcon={
          <Icon
            name='close'
            onClick={() => {this.setState({isOpen: false})}}
          />
        }
        trigger={
          <Button
            size='tiny'
            icon='edit'
            labelPosition='left'
            content='Edit Profile'
            onClick={() => this.setState({
              isOpen: true
            })}
          />
        }
      >
        <Modal.Header>
          Edit Profile
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label><h4>Name:</h4></label>
                <input
                  type='text'
                  name='name'
                  required={true}
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  placeholder='Your Display Name'
                />
              </Form.Field>
              <Form.Field>
                <label><h4>Image:</h4></label>
                <input
                  type='text'
                  name='image'
                  required={true}
                  value={this.state.image}
                  onChange={this.handleInputChange}
                  placeholder='Your Display Image'
                />
                <em className='warning'>Must be a link to an image and the image must be square!</em>
              </Form.Field>
              <Form.Field>
                <label><h4>Saying:</h4></label>
                <input
                  type='text'
                  name='saying'
                  required={true}
                  value={this.state.saying}
                  onChange={this.handleInputChange}
                  placeholder='Your Saying'
                />
              </Form.Field>
              <Button
                type='submit'
                color='green'
              >
                Submit
              </Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
};

UpdateProfileForm.propTypes = propTypes;

export default UpdateProfileForm;
