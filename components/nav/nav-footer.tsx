import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import NavItem from './nav-item';

interface navItem {
  icon: string // FC
  navigationLink: string
  text: string
}

const navItems: navItem[] = [
  {
    icon: 'some-icon',
    navigationLink: 'hi',
    text: 'HOME'
  },
  {
    icon: 'some-icon',
    navigationLink: 'hi',
    text: 'GAMES'
  },
  {
    icon: 'some-icon',
    navigationLink: 'hi',
    text: 'CHAT'
  },
  {
    icon: 'some-icon',
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
      >
        {item.icon}
      </NavItem>
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
