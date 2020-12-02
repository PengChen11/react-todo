import React, {useEffect, useState, useCallback} from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

export const LoginContext = React.createContext();

function LoginProvider(props){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authenticatedUser, saveAuthenticatedUser] = useState({});
  const url = process.env.REACT_APP_API;
  

  const login = async(userInput) =>{
    //connect to auth server
    const config = {
      method: 'post',
      url,
      auth: {
        username: userInput.username,
        password: userInput.password,
      },
    };
    try {
      const response = await axios(config);
      console.log('response is: ', response);
      const {token} = response.data;
      validateToken(token);
    }catch(e){
      console.warn('Login Attempt Failed');
      logout();
      window.alert('login failed. Please try again');
    }
  };

  const logout = () =>{
    setIsLoggedIn(false);
    saveAuthenticatedUser({});
  };


  const validateToken = useCallback((token)=>{

    try {
      let tokenUser = jwt.verify(token, process.env.REACT_APP_SECRET);

      setIsLoggedIn(true);
      saveAuthenticatedUser({...tokenUser, token});
      
      cookie.save('auth', token);
      
    } catch (e){
      logout();
      console.warn('user token error');
      window.alert('Something is wrong with user authentication. Please try to login again');
    }
  },[]);


  useEffect(()=>{
    const token = cookie.load('auth') || null;
    if (token) validateToken(token);
  },[validateToken]);

  useEffect(()=>{
    console.log('this is auth user: ', authenticatedUser);
  },[authenticatedUser]);

  return(
    <LoginContext.Provider value={{ isLoggedIn, authenticatedUser, login, logout}}>
      {props.children}
    </LoginContext.Provider>
  );
}

import PropTypes from 'prop-types';
LoginProvider.propTypes = {
  children: PropTypes.array,
};

export default LoginProvider;