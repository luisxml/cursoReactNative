import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tabs2Screen = () => {

    useEffect(() => {
        console.log('Tabs Screen 2')
    }, [])
    
    return (
        <View> 
            <Text>
                Tab 2 Screen
            </Text>
            
        </View>
    )
}
