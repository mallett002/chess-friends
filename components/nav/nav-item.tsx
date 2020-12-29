import React, { FC } from 'react';
import { View, Text } from 'react-native';

interface navItemProps {
  navigationLink: string
  text: string
}

const NavItem: FC<navItemProps> = (props) => {
  return (
    <View onPress={():void => console.log(props.navigationLink)}>
      <Text>{props.children}</Text>
      <Text>{props.text}</Text>
    </View>
  );
}

export default NavItem;
