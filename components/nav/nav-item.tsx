import React, { FC } from 'react';
import {View, Text, StyleSheet} from 'react-native';
// @ts-ignore
import Feather from 'react-native-vector-icons/Feather';

import {DARK_GREY} from '../../constants/colors';
import * as RootNavigation from '../../helpers/root-navigation';

interface navItemProps {
  navigationLink: string
  text: string
  name: string
}

const NavItem: FC<navItemProps> = ({name, text, navigationLink}) => {
  return (
    <View
      style={styles.navItemContainer}
      onPress={() => console.log(`navigating to ${navigationLink}`)}
        //RootNavigation.navigate(navigationLink, { title: navigationLink })}
    >
      <Feather
        name={name}
        size={30}
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
