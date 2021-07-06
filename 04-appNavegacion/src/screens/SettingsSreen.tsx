import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '../context/AuthContext';

import { colors, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/dist/Ionicons';


export const SettingsScreen = () => {

    const insets = useSafeAreaInsets();

    const {authState} = useContext(AuthContext);
   
    return (
        <View style={{
            ...styles.globalMargin,
            margin: insets.top
            }}>
            <Text style={styles.title}>
                Settings Screen
            </Text>  

            <Text>
                {JSON.stringify(authState, null, 4)}
            </Text>

            {
                authState.favoriteIcon && (<Icon name={authState.favoriteIcon!} size={50} color={colors.primary} />)
            }
            
            {/* <Icon name={authState.favoriteIcon!} size={50} color={colors.primary} /> */}
        </View>
    )
}
