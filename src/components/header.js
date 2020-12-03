import {React} from 'react';
import {Navbar} from 'react-bootstrap';
import Login from '../context/auth/login.js';

export default function Header (){
  return(
    <>
      <Navbar bg="primary" variant="dark" className="justify-content-between">
        <Navbar.Brand href="#home" className="d-inline">Home</Navbar.Brand>
        <Login />
      </Navbar>
    </>
  );
}