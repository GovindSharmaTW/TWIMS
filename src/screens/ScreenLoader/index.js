import React, { useEffect, useState } from 'react';
import { MyTabs, RootContainer } from '../../navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import { styles } from './style';

const ScreenLoader = () => {

  const [user, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    AsyncStorage.getItem('userData')
      .then((res) => {
        setUserData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      })
  }, [])

  console.log('TTo1 app userData is', user);

  return (
    <SafeAreaView style={styles.baseContainer}>
      {
        (user && !isLoading)
          ?
          <MyTabs />
          :
          isLoading
            ?
            <View style={styles.activityContainer}>
              <ActivityIndicator />
              <Text style={styles.textStyle}>Loading ...</Text>
            </View>

            :
            <RootContainer />
      }
    </SafeAreaView>

  )
}

export default ScreenLoader;