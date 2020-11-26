import React, {useState} from 'react';

export const SettingsContext = React.createContext();
//Usage:  import {AppContext} from 'this-file';

function Settings(props){
  const initSettings = {
    showCompleted: false,
    maxNum: 5,
    sort: 'difficulty',
  };

  const [settings, setSettings] = useState(initSettings);

  return (
    <SettingsContext.Provider value = {{settings, setSettings}}>
      {props.children}
    </SettingsContext.Provider>
  );

}

import PropTypes from 'prop-types';
Settings.propTypes = {
  children: PropTypes.array,
};

export default Settings;
