import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, HomeScreen, AssignInventoryItemsScreen, ShowInventoryDetailsScreen, ProfileScreen } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../constants';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export const RootContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Welcome' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const MyTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="AssignInventoryItems" component={AssignInventoryItemsScreen} options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons name="assignment-ind"  color={focused ? Colors.primary : color} size={size} />
          ),
          tabBarLabel: 'AssignInventory'
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
            <FontAwesome name="user"  color={focused ? Colors.primary : color} size={size} />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}