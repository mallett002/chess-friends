import React, {FC} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';  

import NavItem from './nav-item';

interface navItem {
  iconName: string
  navigationLink: string
  text: string
}

const navItems: navItem[] = [
  {
    iconName: 'home',
    navigationLink: 'hi',
    text: 'HOME'
  },
  {
    iconName: 'home',
    navigationLink: 'hi',
    text: 'GAMES'
  },
  {
    iconName: 'home',
    navigationLink: 'hi',
    text: 'CHAT'
  },
  {
    iconName: 'home',
    navigationLink: 'hi',
    text: 'PROFILE'
  },
];

const NavFooter: FC = () => (
  <View style={styles.navContainer}>
    {navItems.map((item) =>
      <NavItem
        key={item.text}
        navigationLink={item.navigationLink}
        text={item.text}
        name={item.iconName}
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    marginBottom: 20
  },
  navItem: {
    padding: 10,
    paddingTop: 20
  }
})

export default NavFooter;
