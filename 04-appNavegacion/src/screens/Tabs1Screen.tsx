import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { colors, styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../componets/TouchableIcon';

export const Tabs1Screen = () => {

    // Hooks para safe area norch
    const { top } = useSafeAreaInsets();
    
    useEffect(() => {
        console.log('Tabs Screen 1')
    }, [])


    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: top
        }}> 
            <Text style={styles.title}>
                Iconos
            </Text>
            <Text>
                <TouchableIcon iconName="airplane-outline"/>
                <TouchableIcon iconName="cash-outline"/>
                <TouchableIcon iconName="mail-open-outline"/>
                <TouchableIcon iconName="qr-code-outline"/>
                <TouchableIcon iconName="stats-chart-outline" />
            </Text>
            
        </View>
    )
}