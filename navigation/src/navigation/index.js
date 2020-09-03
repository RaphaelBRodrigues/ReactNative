import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './Stack';

export default () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </View>
  );
};
