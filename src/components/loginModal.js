import React, {useContext} from 'react';
import {Modal, Button, Form} from 'react-bootstrap'; 
import PropTypes from 'prop-types';
import useForm from '../hooks/useForm.js';
import {LoginContext} from '../context/auth/context.js';

export default function LoginModal (props){

  const [handleSubmit, handleChange] = useForm(registerUser);

  const loginContext = useContext(LoginContext);

  function registerUser (newUserData){

    loginContext.signup(newUserData);

    props.handleClose();
  }

  return (

    <Modal show={props.show} onHide={props.handleClose} onSubmit={handleSubmit}>

      <Modal.Header closeButton>
        <Modal.Title>Welcome to To Do Manager! </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Please input the following info to register as new user.</p>
        <Form className = 'font-weight-bold'>

          <Form.Group controlId='username'>
            <Form.Label className='mr-3'>Username</Form.Label>
            <Form.Control
              required
              name='username'
              onChange = {handleChange}
            >
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name='password'
              type='password'
              onChange = {handleChange}
            >
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              name='email'
              type='email'
              onChange = {handleChange}
            >
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='role'>
            <Form.Label className='mr-3'>What&apos;s your role?</Form.Label>
            <Form.Control
              required
              name='role'
              as='select'
              onChange = {handleChange}
            >
              
              <option value="">...</option>
              <option value="user">User</option>
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type='submit' className='float-right'>
          Register!
          </Button>
          <Button variant="secondary" onClick={props.handleClose}>
            Cancel
          </Button>
        </Form>
      </Modal.Body>

    </Modal>
  );
}

LoginModal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  handleSubmit: PropTypes.func,
};