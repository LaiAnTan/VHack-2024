import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen } from '../screen/HomeScreen/HomeScreen'
import { WelcomeScreen } from '../screen/WelcomeScreen/WelcomeScreen'

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Sign Out" component={WelcomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
