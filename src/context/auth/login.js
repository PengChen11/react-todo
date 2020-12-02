import React, {useState, useContext} from 'react';
import {If, Then, Else} from 'react-if';
import {Form, Button} from 'react-bootstrap';
import {LoginContext} from './context.js';
import LoginModal from '../../components/loginModal.js';


export default function Login(){

  const [possibleUser, savePossibleUser] = useState({});
  const [showSignUp, setShowSignUp] = useState(false);
  const loginContext = useContext(LoginContext);

  const handleSubmit = (e) =>{
    e.preventDefault();
    loginContext.login(possibleUser);
    e.target.reset();
    // call the login() method in context
  };

  const handleChange = (e) =>{
    savePossibleUser({...possibleUser, [e.target.name]:e.target.value});
  };

  const toggleSignUp = () =>{
    setShowSignUp(!showSignUp);
  };


  return (
    <If condition={loginContext.isLoggedIn}>
      <Then>
        <h4>{loginContext.authenticatedUser
          ? `Welcome Back, ${loginContext.authenticatedUser.username}`: 'hi'}</h4>
        <Button
          variant="dark"
          onClick={loginContext.logout}
        >Sign Out</Button>
      </Then>
      <Else>
        <Form inline onSubmit={handleSubmit}>
          <Form.Control
            required
            name='username'
            type='text'
            placeholder='username'
            onChange={handleChange}
            className='m-3'
          >  
          </Form.Control>

          <Form.Control
            required
            name='password'
            type='password'
            placeholder='password'
            onChange={handleChange}
            className='m-3'
          >  
          </Form.Control>

          <Button variant="dark" type="submit" className='m-3'>Sign In</Button>
          <Button variant="dark"  className='m-3' onClick={toggleSignUp}>Sign up</Button>
        </Form>
        <LoginModal show={showSignUp} handleClose={toggleSignUp}></LoginModal>

      </Else>
    </If>

  );
}