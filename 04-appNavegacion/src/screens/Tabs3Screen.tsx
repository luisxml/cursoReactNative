import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tabs3Screen = () => {

    useEffect(() => {
        console.log('Tabs Screen 3')
    }, [])

    
    return (
        <View> 
            <Text>
                Tab 3 Screen
            </Text>
            
        </View>
    )
}
