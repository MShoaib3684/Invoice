import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'

const ButtonWithLoader = ({
    isloading,
    text,
    onPress,
    text1,

}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
            {/* <TouchableOpacity onPress={onPress} style={styles.btnStyle1}> */}
            <Text style={styles.textstyle}>{text}</Text>
            <Text style={styles.textstyle1}>{text1}</Text>
            {<ActivityIndicator size='large' color='green' />}
        </TouchableOpacity>
        // </TouchableOpacity>
    );
};

export default ButtonWithLoader

const styles = StyleSheet.create({
    btnStyle: {
        height: 50,
        width: 300,
        backgroundColor: "#2979FF",
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 30,
    },
    btnStyle1: {
        height: 50,
        width: 200,
        backgroundColor: "#2979FF",
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 30,
    },
    textstyle: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: 13
    },
    textstyle1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        bottom: 37
    },
})
