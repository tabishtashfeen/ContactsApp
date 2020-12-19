import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Notes = (props) => {
  return (
    <View style={styles.container}>
      <Text>Notes</Text>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
