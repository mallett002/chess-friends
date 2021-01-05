import React, {FC} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';  

import NavItem from './nav-item';
import {LIGHT_GREY} from '../../constants/colors';

interface navItem {
  iconName: string
  navigationLink: string
  text: string
}

const navItems: navItem[] = [
  {
    iconName: 'home',
    navigationLink: 'Home',
    text: 'HOME'
  },
  {
    iconName: 'activity',
    navigationLink: 'Games',
    text: 'GAMES'
  },
  {
    iconName: 'message-circle',
    navigationLink: 'Chat',
    text: 'CHAT'
  },
  {
    iconName: 'user',
    navigationLink: 'Profile',
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
    justifyContent: 'space-between',
    width: '100%',
    padding: 8,
    paddingHorizontal: 18,
    borderTopWidth: 1,
    borderTopColor: LIGHT_GREY,
    position: 'absolute',
    bottom: 0
  },
  navItem: {
    padding: 10,
    paddingTop: 20
  }
});

export default NavFooter;
