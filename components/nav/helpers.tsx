import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

interface ITabScreenOptions {
  route: {
    name: string
  }
}

interface ITabBarIcon {
  color: string
  size: number
}

export const tabScreenOptions = ({ route }: ITabScreenOptions) => ({
  tabBarIcon: ({color, size }: ITabBarIcon) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'home'
    } else if (route.name === 'Games') {
      iconName = 'activity';
    } else if (route.name === 'Profile') {
      iconName = 'user';
    } else if (route.name === 'Chats') {
      iconName = 'message-square';
    } else {
      iconName = 'question'
    }

    return <Feather name={iconName} size={size} color={color} />;
  },
});
