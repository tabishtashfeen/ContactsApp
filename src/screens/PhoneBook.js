import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PhoneBook = (props) => {
  return (
    <View style={styles.container}>
      <Text>PhoneBook</Text>
    </View>
  );
};

export default PhoneBook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
