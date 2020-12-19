import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {settings as s} from './src/services/Settings';
import {reducer} from './src/services/state/Reducer';
import {StateProvider} from './src/services/state/State';
import {initialState} from './src/services/state/InitialState';
import Navigator from './src/navigators/Navigator';

const App = () => {
  const [initialRoute, setInitialRoute] = useState(null);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(s.userDetails);
      if (jsonValue != null) {
        let details = JSON.parse(jsonValue);
        console.log(details);
        if (details) {
          setInitialRoute('MainTab');
        } else {
          setInitialRoute('Login');
        }
      } else {
        setInitialRoute('Login');
      }
    } catch (e) {
      setInitialRoute('Login');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!initialRoute) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <StateProvider initialState={initialState} reducer={reducer}>
        <Navigator initialRoute={initialRoute} />
      </StateProvider>
    </>
  );
};

export default App;
