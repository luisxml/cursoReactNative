import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';

// interface RoutesParams {
//     id: number,
//     nombre: string
// }

interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'> {};


export const PersonaScreen = ({navigation, route}: Props) => {

    // const params = route.params as RoutesParams
    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, []);

    console.log(params);
    return (
        <View style={styles.title}>
            <Text>PersonaScreen</Text>
            <Text
                style={styles.title}
            >
                {JSON.stringify(params,null,3)}
            </Text>
        </View>
    )
}
