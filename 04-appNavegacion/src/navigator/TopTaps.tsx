import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigatos = () => {

    const { top } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            style={{
                paddingTop: top
            }}
            sceneContainerStyle= {{
                backgroundColor: 'white'
            }}
            tabBarOptions={{
                activeTintColor: colors.primary,
                showIcon: true,
                indicatorStyle: {
                    backgroundColor: colors.primary
                },
                style: {
                    shadowColor: 'transparent',
                    // borderTopColor: colors.primary,
                    // borderTopWidth: 0,
                    elevation: 0
                }
            }}
            screenOptions = { ({route})=> ({
                tabBarIcon: ({focused, color})=> {
                    let iconName: string = '';
    
                    switch (route.name) {
                        case 'Chat':
                            iconName = 'chatbubble-ellipses-outline' 
                            break;
                            
                        case 'Contacts':
                            iconName = 'call-outline' 
                            break;
    
                        case 'Albums':
                            iconName = 'images-outline' 
                            break;
                        
                        default:
                            break;
                    }
                    return <Icon name={iconName}size={20} color={color} />
                }
            })}
        >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Contacts" component={ContactScreen} />
            <Tab.Screen name="Albums" component={AlbumScreen} />
        </Tab.Navigator>
    );
}