import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text
                style={styles.title}
            >
                Box Objet Model
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1
    },
    title: {
        padding: 50,
        fontSize: 25,
        borderColor: 'black',
        borderWidth: 10
    }
});
