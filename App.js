import React, { useState, Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Note from './Screens/Note'
import Schedule from './Screens/Schedule'
import Notification from './Screens/Notification'
import { MaterialIcons } from '@expo/vector-icons'

export default class App extends Component {


  render() {
    const Tab = createBottomTabNavigator()

    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Note"
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
            name="Note"
            component={Note}
            options={{
              tabBarIcon: () =>
                <MaterialIcons name='note' size={22} />
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


