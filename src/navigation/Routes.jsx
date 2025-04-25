import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREENS} from '../utils/helpers';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SongInfoScreen from '../screens/SongInfoScreen';
import SongsScreen from '../screens/SongsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const {HOME, SONGINFO, SONGS, PROFILE, LOGIN} = SCREENS;
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={HOME} component={HomeScreen} />
      <Tab.Screen name={LOGIN} component={LoginScreen} />
      <Tab.Screen name={PROFILE} component={ProfileScreen} />
      <Tab.Screen name={SONGINFO} component={SongInfoScreen} />
      <Tab.Screen name={SONGS} component={SongsScreen} />
    </Tab.Navigator>
  );
};
const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={LOGIN} component={LoginScreen} />
        <Stack.Screen name="Main" component={BottomTabs} />
        <Stack.Screen name={SONGS} component={SongsScreen} />
        <Stack.Screen name={SONGINFO} component={SongInfoScreen} />
        <Stack.Screen name={PROFILE} component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
