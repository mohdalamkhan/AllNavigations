import {View, Text} from 'react-native';
import React from 'react';
import DrawerNavigator from '../drawer/DrawerNavigator';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <DrawerNavigator />
    </View>
    // <Drawer.Navigator >
    //   <Drawer.Screen name="DrawerNavigator" component={DrawerNavigator} />
    // </Drawer.Navigator>
  );
};

export default Home;
