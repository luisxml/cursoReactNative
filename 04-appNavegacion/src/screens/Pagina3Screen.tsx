import React from 'react'
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any,any>{

};

export const Pagina3Screen = ({navigation}: Props) => {
    return (
        <View>
            <Text style={styles.title}>
                Pagina3Screen
            </Text>

            <Button
                title="Regresar"
                onPress={()=> navigation.pop()}
            />

             <Button
                title="Ir al home"
                onPress={()=> navigation.popToTop()}
            />
        </View>
    )
}
