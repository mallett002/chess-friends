import React, { FC } from 'react';
import { View, Text } from 'react-native';

interface navItemProps {
  navigationLink: string
  text: string
  children: FC
}

const NavItem: FC<navItemProps> = (props) => {
  const Icon = props.children;
  console.log({icon: Icon});
  

  return (
    <View>
      <Icon />
      <Text>{props.text}</Text>
    </View>
  );
}

export default NavItem;
