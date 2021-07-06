import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';

// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuBasic } from './src/navigator/MenuBasic';
import { Menu } from './src/navigator/Menu';
import { Tabs } from './src/navigator/Tabs';
import { Text, View } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator/> */}
        <Menu/>
        {/* <Tabs/> */}
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;
