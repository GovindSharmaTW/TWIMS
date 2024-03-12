/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';

import { MyTabs, RootContainer } from './src/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {

  const [user, setUserData] = useState(null)

  useEffect(() => {
    AsyncStorage.getItem('userData')
      .then((res: any) => {

        setUserData(res);
        console.log('app screen res', res);

      })
      .catch(err => console.log('app screen res', err))
  }, [])

  console.log('TTo1 app userData is', user);

  return (
    user ?
      <MyTabs />

      :
      <RootContainer />

  )
}

export default App;
