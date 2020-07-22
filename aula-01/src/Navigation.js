import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AntIcons from 'react-native-vector-icons/AntDesign';

import Button from './components/Button';
import HomeScreen from './screens/Home';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: '#000',
            borderTopColor: 'rgba(255, 255, 255, 0.3)'
          },
          activeTintColor: '#fff',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <EntypoIcons name="home" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Discover"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FeatherIcons name="search" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="New"
          component={HomeScreen}
          options={{
            title: '',
            tabBarIcon: ({ size, color }) => (
              <Button />
            )
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <EntypoIcons name="chat" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <AntIcons name="user" size={size} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
