import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';

// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuBasic } from './src/navigator/MenuBasic';
import { Menu } from './src/navigator/Menu';
import { Tabs } from './src/navigator/Tabs';
import { Text, View } from 'react-native';

const App = () => {
  return (


    <NavigationContainer>
      {/* <StackNavigator/> */}
      <Menu/>
      {/* <Tabs/> */}
    </NavigationContainer>
  )
}

export default App;
