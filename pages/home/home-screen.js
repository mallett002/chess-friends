import * as React from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen({navigation}) {
  console.log({navigation});
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}