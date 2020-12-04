import React, {useState} from 'react';

export const SettingsContext = React.createContext();

function Settings(props){
  const initSettings = {
    showCompleted: false,
    maxNum: 5,
    sort: 'difficulty',
    sortOrder: 'ascending',
  };

  let localSettings;
  try {
    localSettings = JSON.parse(localStorage.getItem('ToDoManagerSettingsData'));

  } catch (e){
    localStorage.removeItem('ToDoManagerSettingsData');
    console.warn('Local settings data corrupted');
  }
  const [settings, setSettings] = useState(localSettings ||initSettings);
  
  return (
    <SettingsContext.Provider value = {{settings, setSettings}}>
      {props.children}
    </SettingsContext.Provider>
  );

}

import PropTypes from 'prop-types';
Settings.propTypes = {
  children: PropTypes.object,
};

export default Settings;
