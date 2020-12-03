import React, {useState} from 'react';

export const SettingsContext = React.createContext();

function Settings(props){
  const initSettings = {
    showCompleted: false,
    maxNum: 5,
    sort: 'difficulty',
    sortOrder: 'ascending',
  };

  const [settings, setSettings] = useState(localStorage.getItem('ToDoManagerSettingsData') ||initSettings);

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
