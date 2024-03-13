import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, AssignInventoryItemsScreen, ShowInventoryDetailsScreen, ProfileScreen, ScreenLoader } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../constants';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export const RootContainer = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name="ScreenLoader"
        component={ScreenLoader}
        options={{ title: 'Welcome' }}
      />
    </Stack.Navigator>
  );
};

export const MyTabs = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: Colors.primary
    }}>
      <Tab.Screen name="AssignInventory" component={AssignInventoryItemsScreen} options={{
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => (
          <MaterialIcons name="assignment-ind" color={focused ? Colors.primary : color} size={size} />
        )
      }} />
      <Tab.Screen name="ShowInventory" component={ShowInventoryDetailsScreen} options={{
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => (
          <MaterialIcons name="assignment" color={focused ? Colors.primary : color} size={size} />
        )
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => (
          <FontAwesome name="user" color={focused ? Colors.primary : color} size={size} />
        )
      }} />
    </Tab.Navigator>
  );
}