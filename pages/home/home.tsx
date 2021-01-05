import React, { FC } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';


const Home: FC = (props) => {
  console.log({props});
  
  return (
    <SafeAreaView style={styles.contentWrapper}>
      <View>
        <Text style={styles.header}>
          Welcome to Chess Friends!
      </Text>
        <Text>Some other content</Text>
      </View>
    </SafeAreaView>
  );
};

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

export default Home;
