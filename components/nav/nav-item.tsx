import React, { FC } from 'react';
import { View, Text } from 'react-native';
// @ts-ignore
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {DARK_GREY} from '../../constants/colors';

interface navItemProps {
  navigationLink: string
  text: string
  name: string
}

const NavItem: FC<navItemProps> = ({name, text, navigationLink}) => {
  return (
    <View>
      <FontAwesome5
        name={name}
        size={50}
        color={DARK_GREY}
      />
      <Text>{text}</Text>
    </View>
  );
}

export default NavItem;
