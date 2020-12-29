import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const NavFooter = () => (
  <View style={styles.navContainer}>
    <View><Text style={styles.navItem}>HomeIcon</Text></View>
    <View><Text style={styles.navItem}>GamesIcon</Text></View>
    <View><Text style={styles.navItem}>ChatIcon</Text></View>
    <View><Text style={styles.navItem}>ProfileIcon</Text></View>
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
