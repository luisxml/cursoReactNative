import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsSreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';


const Drawer = createDrawerNavigator();

export const Menu= () => {

    const {width} = useWindowDimensions();


  return (
    <Drawer.Navigator
        drawerType={width >=  650 ? 'permanent': 'front'}
        drawerContent={ (props) => <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      <Drawer.Screen name="Tabs" component={Tabs} />
      
    </Drawer.Navigator>
  );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/z/icono-del-perfil-avatar-defecto-105356015.jpg'
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menu */}
      <View style={styles.menuContainer}>
          <TouchableOpacity 
            style={styles.menuBtn}
            onPress={()=> navigation.navigate('SettingsScreen')}
          >
            <Text style={styles.menuText}>
              Ajustes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuBtn}
            onPress={()=> navigation.navigate('Tabs')}
          >
            <Text style={styles.menuText}>
              Tabs
            </Text>
          </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
};