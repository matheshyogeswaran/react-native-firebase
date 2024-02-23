import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import Signin from './Signin';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Signin />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
