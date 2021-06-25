import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Text, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import { Tabs3Screen } from '../screens/Tabs3Screen';
import { Tabs2Screen } from '../screens/Tabs2Screen';
import { Tabs1Screen } from '../screens/Tabs1Screen';
import { StackNavigator } from './StackNavigator';
import { colors, styles } from '../theme/appTheme';
import { TopTabNavigatos } from './TopTaps';


export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIOS/>
        : <TabsAndroid/>
}

const BottonTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottonTabAndroid.Navigator
        sceneAnimationEnabled={true}
        barStyle={{
            backgroundColor: colors.primary
        }}
        screenOptions = { ({route})=> ({
            tabBarIcon: ({focused, color})=> {
                let iconName: string = '';

                switch (route.name) {
                    case 'Tabs1Screen':
                        iconName = 'home-outline' 
                        break;

                    case 'Tabs2Screen':
                        iconName = 'stats-chart-outline' 
                        break;

                    case 'StackNavigator':
                        iconName = 'swap-horizontal-outline' 
                        break;
                    
                    default:
                        break;
                }
                return <Icon name={iconName}size={20} color={color} />
            }
        })}
    >
      <BottonTabAndroid.Screen name="Tabs1Screen" options={{title:'Tab1'}} component={Tabs1Screen} />
      <BottonTabAndroid.Screen name="Tabs2Screen" options={{title:'Tab2'}} component={TopTabNavigatos} />
      <BottonTabAndroid.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </BottonTabAndroid.Navigator>
  );
}

const BottonTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottonTabIOS.Navigator
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
      <BottonTabIOS.Screen name="Tabs1Screen" options={{title:'Tab1'}} component={Tabs1Screen} />
      <BottonTabIOS.Screen name="Tabs2Screen" options={{title:'Tab2'}} component={Tabs2Screen} />
      <BottonTabIOS.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </BottonTabIOS.Navigator>
  );
}