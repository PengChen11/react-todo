import React, {useEffect, useState, useCallback} from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

export const LoginContext = React.createContext();

function LoginProvider(props){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authenticatedUser, saveAuthenticatedUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const signInUrl = process.env.REACT_APP_SIGNIN_URL;
  const signUpURL = process.env.REACT_APP_SIGNUP_URL;
  

  const login = async(userInput) =>{
    setIsLoading(true);
    //connect to auth server
    const config = {
      method: 'post',
      url: signInUrl,
      auth: {
        username: userInput.username,
        password: userInput.password,
      },
    };
    try {
      const response = await axios(config);
      const {token} = response.data;
      validateToken(token);
      setIsLoading(false);
    }catch(e){
      console.warn('Login Attempt Failed');
      logout();
      window.alert('login failed. Please try again');
      setIsLoading(false);
    }
  };

  const signup = async (userData) =>{
    setIsLoading(true);
    const config = {
      method:'post',
      url: signUpURL,
      data: userData,
    };
    
    try {
      const response = await axios(config);
      const {token} = response.data;
      validateToken(token);
      setIsLoading(false);
    }catch(e){
      console.warn('Register Attempt Failed');
      logout();
      window.alert('Register process failed. Please try again');
      setIsLoading(false);
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
    (!!token) && validateToken(token);
  },[validateToken]);



  return(
    <LoginContext.Provider value={{ isLoggedIn, authenticatedUser, login, logout, signup, isLoading}}>
      {props.children}
    </LoginContext.Provider>
  );
}

import PropTypes from 'prop-types';
LoginProvider.propTypes = {
  children: PropTypes.array,
};

export default LoginProvider;