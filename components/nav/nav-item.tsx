import React, { FC } from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
    <View style={styles.navItemContainer}>
      <Feather
        name={name}
        size={50}
        color={DARK_GREY}
      />
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navItemContainer: {
    display: 'flex',
    alignItems: 'center'
  }
});

export default NavItem;
