import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const TareaScreen = () => {
    return (
        <View style={styles.constainer}>

            <View style={styles.cajaMorada}></View>
            <View style={styles.cajanNaranja}></View>
            <View style={styles.cajanAzul}></View>
            

        </View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: '#28425B'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6'
    },
    cajanNaranja: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B'
    },
    cajanAzul: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9'
    }
    
});
