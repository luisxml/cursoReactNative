import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Tabs3Screen } from '../screens/Tabs3Screen';
import { Tabs2Screen } from '../screens/Tabs2Screen';
import { Tabs1Screen } from '../screens/Tabs1Screen';
import { StackNavigator } from './StackNavigator';
import { colors, styles } from '../theme/appTheme';
import { Text } from 'react-native';
import { color } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        tabBarOptions={{
            activeTintColor: colors.primary,
            style: {
                borderTopColor: colors.primary,
                borderTopWidth: 0,
                elevation: 0
            },
            labelStyle: {
                fontSize: 20
            }
        }}
        screenOptions = { ({route})=> ({
            tabBarIcon: ({focused, color, size})=> {
                let iconName: string = '';

                switch (route.name) {
                    case 'Tabs1Screen':
                        iconName = 'T1' 
                        break;

                    case 'Tabs2Screen':
                        iconName = 'T2' 
                        break;

                    case 'StackNavigator':
                        iconName = 'S' 
                        break;
                    
                    default:
                        break;
                }
                return <Text style={{color}}>{iconName}</Text>
            }
        })}
    >
      {/* <Tab.Screen name="Tabs1Screen" options={{title:'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text>}} component={Tabs1Screen} /> */}
      <Tab.Screen name="Tabs1Screen" options={{title:'Tab1'}} component={Tabs1Screen} />
      <Tab.Screen name="Tabs2Screen" options={{title:'Tab2'}} component={Tabs2Screen} />
      <Tab.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </Tab.Navigator>
  );
}