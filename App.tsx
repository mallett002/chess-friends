import React, { FC } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

const App:FC = () => (
  <SafeAreaView style={styles.contentWrapper}>
    <Text style={styles.header}>
      Welcome to Chess Friends!
    </Text>
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
