import React, { FC } from 'react';
import { View, Text } from 'react-native';

interface navItemProps {
  navigationLink: string
  text: string
  children: string
}

const NavItem: FC<navItemProps> = (props) => {
  return (
    <View>
      <Text>{props.children}</Text>
      <Text>{props.text}</Text>
    </View>
  );
}

export default NavItem;
