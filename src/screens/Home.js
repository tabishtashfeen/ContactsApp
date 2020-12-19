import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useStateValue} from '../services/state/State';
const Home = (props) => {
  const [state, dispatch] = useStateValue();
  const {user} = state;
  return (
    <View style={styles.container}>
      <Text>Welcome {user.name}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
