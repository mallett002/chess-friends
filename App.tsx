import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// @ts-ignore
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from './pages/home/home-screen';
import GamesScreen from './pages/games/games-screen';
import ProfileScreen from './pages/profile/profile-screen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home'
            } else if (route.name === 'Games') {
              iconName = 'activity';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            }

            return <Feather name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Games" component={GamesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}