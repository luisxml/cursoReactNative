import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tabs1Screen = () => {
    
    useEffect(() => {
        console.log('Tabs Screen 1')
    }, [])


    return (
        <View> 
            <Text>
                Tab 1 Screen
            </Text>
            
        </View>
    )
}
