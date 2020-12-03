import React from 'react';
import Header from './components/header.js';
import Todo from './components/todo/todo.js';
import LoginContext from './context/auth/context.js';
import Auth from './context/auth/auth.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function App (){

  return(
    <LoginContext>
      <Header/>
      <Auth>
        <Todo/>
      </Auth>
    </LoginContext>
  );
}
