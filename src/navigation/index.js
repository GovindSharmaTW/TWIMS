import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import AssignInventoryItemsScreen from '../screens/AssignInventoryItem';
import ShowInventoryDetailsScreen from '../screens/ShowInventoryDetails';

const Stack = createNativeStackNavigator();

export const RootContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AssignInventoryItems" component={AssignInventoryItemsScreen} />
        <Stack.Screen name="ShowInventoryDetails" component={ShowInventoryDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};