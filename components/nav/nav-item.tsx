import React, { FC } from 'react';
import { View, Text } from 'react-native';
// @ts-ignore
import Feather from 'react-native-vector-icons/Feather';

import {DARK_GREY} from '../../constants/colors';

interface navItemProps {
  navigationLink: string
  text: string
  name: string
}

const NavItem: FC<navItemProps> = ({name, text, navigationLink}) => {
  return (
    <View>
      <Feather
        name={name}
        size={50}
        color={DARK_GREY}
      />
      <Text>{text}</Text>
    </View>
  );
}

export default NavItem;
