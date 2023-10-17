import {View, Text} from 'react-native';
import React from 'react';
import BottomNavigator from '../bottom_tab/BottomNavigator';

const DrawerMain = () => {
  return (
    <View style={{flex: 1}}>
      <BottomNavigator />
    </View>
  );
};

export default DrawerMain;
