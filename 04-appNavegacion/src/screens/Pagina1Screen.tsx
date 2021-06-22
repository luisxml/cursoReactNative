import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';


// interface Props extends StackScreenProps<any, any> {
//     id: number;
//     nombre: string
// }
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: ()=> (
                <Button
                    title="Menu"
                    onPress={() => navigation.toggleDrawer()}
                />
            )
        })
    }, [])
    return (
        <View style= {styles.globalMargin}>
            <Text style={styles.title}>
                Pagina1Screen
            </Text>

            <Button
                title="Ir Pagina 2"
                onPress= { () => navigation.navigate('Pagina2Screen')}
            />

           <Text style={styles.title}>
               Navegar con argumentos
           </Text>

           <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{...styles.btnGrande, backgroundColor: '#5856D6'}}  
                    onPress={()=> navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Luis'
                    })}   
                >
                    <Text style={styles.btnGrandeText}>Luis</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{...styles.btnGrande, backgroundColor: '#FF9427'}}  
                    onPress={()=> navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Luciano'
                    })}   
                >
                    <Text style={styles.btnGrandeText}>Luciano</Text>
                </TouchableOpacity>

                {/* <Image
                    source={require('./avatar.jpg')}
                    style={styles.avatar}
                /> */}
            </View>
        </View>
    )
}
