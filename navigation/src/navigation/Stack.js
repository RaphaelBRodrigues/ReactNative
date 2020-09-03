import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
// import { createStackNavigator } from 'react-navigation/stack';
import AScreen from '../views/aScreen';
import BScreen from '../views/bScreen';
import CScreen from '../views/cScreen';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="TelaA"
      screenOptions={{headerShown: true}}>
      <Stack.Screen name="TelaA" component={AScreen} />
      <Stack.Screen name="TelaB" component={BScreen} />
      <Stack.Screen name="TelaC" component={CScreen} />
    </Stack.Navigator>
  );
};
