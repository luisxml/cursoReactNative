import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsSreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';


const Drawer = createDrawerNavigator();

export const MenuBasic= () => {

    const {width} = useWindowDimensions();


  return (
    <Drawer.Navigator
        drawerType={width >=  650 ? 'permanent': 'front'}
    >
      <Drawer.Screen name="StackNavigator" options={{title: 'Home'}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{title: 'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}