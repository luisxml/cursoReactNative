import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuBasic } from './src/navigator/MenuBasic';
import { Menu } from './src/navigator/Menu';

const App = () => {
  return (
    
    <NavigationContainer>
      {/* <StackNavigator/> */}
      <Menu/>
    </NavigationContainer>
  )
}

export default App;
