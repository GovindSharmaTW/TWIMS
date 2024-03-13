/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenLoader } from './src/screens';

const App = () => {

  return (
    <NavigationContainer>
      <ScreenLoader />
    </NavigationContainer>
  )
}

export default App;
