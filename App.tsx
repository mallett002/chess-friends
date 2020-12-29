import React, { FC } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import NavFooter from './components/nav/nav-footer';

const App = () => (
  <SafeAreaView style={styles.contentWrapper}>
      <View>
        <Text style={styles.header}>
          Welcome to Chess Friends!
      </Text>
        <Text>Some other content</Text>
      </View>
    <NavFooter />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    paddingTop: 10,
    flex: 1
  },
  header: {
    fontSize: 24
  }
});

export default App;
