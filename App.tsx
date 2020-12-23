<script src="http://localhost:8097"></script>
import React, { FC } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import NavFooter from './components/nav/nav-footer';

const App = () => (
  <SafeAreaView style={styles.contentWrapper}>
    <Text style={styles.header}>
      Welcome to Chess Friends!
    </Text>
    <NavFooter/>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    paddingTop: 10
  },
  header: {
    fontSize: 24
  }
});

export default App;
