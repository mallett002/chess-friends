import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NavFooter from './components/nav/nav-footer';
import HomeScreen from './pages/home/home';
import ProfileScreen from './pages/profile/profile';
import { navigationRef } from './helpers/root-navigation';

const Stack = createStackNavigator();

const App: FC = () => (
  <>
    <NavigationContainer ref={navigationRef.current}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    <NavFooter />
  </>
);

export default App;
