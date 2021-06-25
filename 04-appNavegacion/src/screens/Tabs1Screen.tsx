import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { colors, styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
                <Icon name="airplane-outline" size={50} color="#542151" />
                <Icon name="cash-outline" size={50} color={colors.primary} />
                <Icon name="mail-open-outline" size={50} color='red' />
                <Icon name="qr-code-outline" size={50} color="blue" />
                <Icon name="stats-chart-outline" size={50} color="green" />
            </Text>
            
        </View>
    )
}