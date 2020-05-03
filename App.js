import React, { useState, Component } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Screens/Home'
import Schedule from './Screens/Schedule'
import Notification from './Screens/Notification'
import { MaterialIcons } from '@expo/vector-icons'

export default class App extends Component {


  render() {
    const Tab = createBottomTabNavigator()

    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={
            { activeTintColor: '#2C45FE' }
          }>
          <Tab.Screen
            name="Notifications"
            component={Notification}
            options={{
              tabBarIcon: () =>
                <MaterialIcons name='notifications' size={22} />

            }} />
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: () =>
                <MaterialIcons name='home' size={22} />
            }}
          />
          <Tab.Screen
            name="Schedule"
            component={Schedule}
            options={{
              tabBarIcon: () =>
                <MaterialIcons name='date-range' size={22} />
            }} />
        </Tab.Navigator>
      </NavigationContainer >
    );
  }
}


