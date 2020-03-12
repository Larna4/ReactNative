import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Search from './Search'
import Post from './Post'
import Profile from './Profile'
import { Ionicons } from 'react-native-vector-icons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { SimpleLineIcons } from 'react-native-vector-icons';
const Tab = createBottomTabNavigator();

export default class TabNavigation extends Component {
  render() {
    return (
      <NavigationContainer> 
        <Tab.Navigator>
          <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{ 
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-home" color={color} size={size} />)
            }}
          />
          <Tab.Screen 
            name="Search" 
            component={Search} 
            options={{ 
              tabBarIcon: ({ color, size }) => (
                <SimpleLineIcons name="magnifier" color={color} size={size} />)
            }}
          />
          <Tab.Screen 
            name="Post" 
            component={Post} 
            options={{ 
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-albums" color={color} size={size} />)
            }}
          />
          <Tab.Screen 
            name="Profile" 
            component={Profile} 
            options={{ 
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="face" color={color} size={size} />)
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}