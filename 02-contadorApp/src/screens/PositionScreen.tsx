import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PositionScreen = () => {
    return (
        <View style={styles.container}>

            <View style={styles.cajaVerde}/>
            
            <View style={styles.cajaMorada}/>

            <View style={styles.cajaNaranja}/>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: 400,
        width: 400,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#28C4D9'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0
        // bottom: 0
    },  
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23b',
        borderWidth: 10,
        borderColor: 'white'
    },  
    cajaVerde: {
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        // bottom: 0,
        // right: 0,
        // position: 'absolute',
        ...StyleSheet.absoluteFillObject
    }  
});
