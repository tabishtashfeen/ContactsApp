import React, {useEffect} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {CommonActions} from '@react-navigation/native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useStateValue} from '../services/state/State';

const DrawerContent = (props) => {
  const [state] = useStateValue();
  const {user} = state;

  const handleLogout = async () => {
    props.navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Login'}],
      }),
    );
  };
  return (
    <>
      <DrawerContentScrollView style={styles.container} {...props}>
        <View style={styles.toggleDrawerButtonContainer}>
          <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
            <IoniconsIcon name="arrow-back-sharp" size={25} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainerStyle}>
            <Image
              source={require('../assets/user.jpg')}
              style={styles.imageStyle}
            />
          </View>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
            }}>
            {user && user.name}
          </Text>
        </View>
        {/* <DrawerItemList {...props} /> */}
      </DrawerContentScrollView>
      <TouchableOpacity
        style={styles.logoutContainerStyle}
        onPress={handleLogout}>
        {/* <MaterialCommunityIcons name="exit-to-app" size={25} color="#fff" /> */}
        <View>
          <Text style={styles.logoutTextStyle}>Logout</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // borderBottomRightRadius: 15,
    marginBottom: 55,
  },
  toggleDrawerButtonContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    marginTop: Platform.OS === 'ios' ? 30 : 25,
    marginLeft: 10,
    zIndex: 1,
  },
  profileContainer: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 35 : 30,
  },
  details: {
    marginLeft: 10,
  },
  imageStyle: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  imageContainerStyle: {
    padding: 1,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#fff',
  },
  memberImageStyle: {
    height: 35,
    width: 35,
    borderRadius: 20,
  },
  memberImageContainerStyle: {
    margin: 2,
    padding: 1,
    width: 40,
    alignItems: 'center',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#000',
  },
  memberListStyle: {
    padding: 5,
  },
  statsContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    backgroundColor: '#005ca4',
  },
  statsStyle: {
    padding: 10,
    width: '33.33%',
    alignItems: 'center',
    borderWidth: 0.5,
  },
  statsTitleStyle: {
    fontSize: 10,
    color: '#fff',
    textAlign: 'center',
  },
  statsValueStyle: {
    fontWeight: '500',
    fontSize: 18,
    color: '#fff',
  },
  membersHeaderStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  textStyle: {
    paddingVertical: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ff5d5b',
  },
  buttonContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logoutContainerStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ffe6e6',
    padding: 20,
  },
  logoutTextStyle: {
    marginLeft: 10,
    color: 'red',
    fontSize: 12,
  },
});

export default DrawerContent;
