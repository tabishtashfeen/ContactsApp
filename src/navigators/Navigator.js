import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FeatherIcon from 'react-native-vector-icons/Feather';

import LoginScreen from '../../src/screens/Login';
import HomeScreen from '../../src/screens/Home';
import NotesScreen from '../../src/screens/Notes';
import PhoneBookScreen from '../../src/screens/PhoneBook';

import DrawerContent from '../components/DrawerContent';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HeaderWithMenu = (title, navigation) => ({
  // eslint-disable-next-line react/display-name
  title: title,
  headerLeft: () => (
    <FeatherIcon
      onPress={() => navigation.toggleDrawer()}
      name="menu"
      size={25}
      color="black"
      style={{marginLeft: 15}}
    />
  ),
});

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={({navigation}) => HeaderWithMenu('Home', navigation)}
    />
  </Stack.Navigator>
);

const NotesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Notes"
      component={NotesScreen}
      options={({navigation}) => HeaderWithMenu('Notes', navigation)}
    />
  </Stack.Navigator>
);

const PhoneBookStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="PhoneBook"
      component={PhoneBookScreen}
      options={({navigation}) => HeaderWithMenu('Phone Book', navigation)}
    />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{
        // eslint-disable-next-line react/display-name
        tabBarIcon: ({color}) => {
          return (
            <AntDesignIcon name={'home'} color={color} size={25} />
            // <DashboardIcon width={25} height={25} fill='red' />
          );
        },
      }}
    />
    <Tab.Screen
      name="Notes"
      component={NotesStack}
      options={{
        // eslint-disable-next-line react/display-name
        tabBarIcon: ({color}) => (
          <FoundationIcon name={'clipboard-notes'} color={color} size={25} />
        ),
        title: 'Notes',
      }}
    />
    <Tab.Screen
      name="Phone Book"
      component={PhoneBookStack}
      options={{
        // eslint-disable-next-line react/display-name
        tabBarIcon: ({color}) => (
          <FontistoIcon name={'person'} color={color} size={25} />
        ),
        title: 'Phone Book',
      }}
    />
  </Tab.Navigator>
);

function Navigator({initialRoute}) {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={initialRoute}
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="MainTab" component={TabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
