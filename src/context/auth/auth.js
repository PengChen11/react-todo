import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {LoginContext} from './context.js';

import {When} from 'react-if';

export default function Auth(props){

  const loginContext = useContext(LoginContext);

  let okToRender = false;

  try {
    let  authorized= props.capability
      ? loginContext.authenticatedUser.capabilities.includes(props.capability) : true;

    okToRender = loginContext.isLoggedIn && authorized;
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

//