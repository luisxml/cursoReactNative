import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    btnGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        marginTop: 5
    },
    btnGrandeText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    avatarContainer: {
        alignItems: 'center'
    },
    menuContainer: {
        marginVertical: 25,
        marginHorizontal: 20
    },
    menuText: {
        fontSize: 20
    },
    menuBtn: {
        marginVertical: 5,
    }
    
});