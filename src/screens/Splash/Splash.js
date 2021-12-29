import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, Text, View, Dimensions, Image } from 'react-native'

const image = { uri: "https://reactjs.org/logo-og.png" };
const Splash = ({ navigation }) => {
    setTimeout(() => {
        navigation.replace('Login')
    }, 1000);
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/Splash.png')} resizeMode="cover" style={styles.image}>
                <Image source={require('../../assets/logo.png')} />
            </ImageBackground>
            <View>
                <View style={{ alignItems: 'center', justifyContent: 'flex-end', bottom: 20 }}>
                    <Image source={require('../../assets/logotext.png')} style={styles.text} />
                </View>
            </View>
        </View>
    );
}
export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    text: {
        flex: 1,
        position: 'absolute'
    }
})
