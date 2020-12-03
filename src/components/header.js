import React, {useContext} from 'react';
import {Navbar} from 'react-bootstrap';
import Login from '../context/auth/login.js';
import ReactLoading from 'react-loading';
import {LoginContext} from '../context/auth/context.js';
import {When} from 'react-if';

export default function Header (){
  const {isLoading} = useContext(LoginContext);

  return(
    <>
      <Navbar bg="primary" variant="dark" className="justify-content-between">
        <Navbar.Brand href="#home" className="d-inline">Home</Navbar.Brand>
        <Login />
      </Navbar>
      <When condition = {isLoading}>
        <ReactLoading type={'bars'} color={'grey'} width={150} className='m-auto' />
      </When>
    </>
  );
}