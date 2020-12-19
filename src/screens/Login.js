import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useStateValue} from '../services/state/State';
import {settings as s} from '../services/Settings';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLoginPress = async () => {
    if (username === '') {
      alert('Username should not be empty');
    } else if (password === '') {
      alert('Password should not be empty');
    } else {
      await storeData(
        s.userDetails,
        JSON.stringify({
          username: username,
          password: password,
        }),
      );
      props.navigation.navigate('MainTab');
    }
  };

  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={username}
        placeholder="username"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleUsernameChange}
      />
      <TextInput
        style={styles.textInput}
        value={password}
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        onChangeText={handlePasswordChange}
      />
      <TouchableOpacity style={{marginTop: 10}} onPress={handleLoginPress}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '70%',
    height: 35,
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10,
  },
});
