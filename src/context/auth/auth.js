import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {LoginContext} from './context.js';

import {When} from 'react-if';

export default function Auth(props){

  const {authenticatedUser, isLoggedIn} = useContext(LoginContext);

  let okToRender = false;

  try {
    if (Object.keys(authenticatedUser).length !== 0 ){

      let  authorized= props.capability
        ? authenticatedUser.capabilities.includes(props.capability) : true;
  
      okToRender = isLoggedIn && authorized;
    }
  } catch (e){
    console.warn('Not Authorized');
  }

  return (
    <When condition={okToRender}>
      {props.children}
    </When>
  );
}

Auth.propTypes = {
  children: PropTypes.object,
  capability: PropTypes.string,
};
