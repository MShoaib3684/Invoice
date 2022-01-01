import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, ImageBackground, Image, ScrollView } from 'react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import InputText from '../../components/InputText';
import validator from '../utils/validations';
import { showError } from '../utils/helperFunction';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Feather';
import TabRoutes from '../../navigations/TabRoutes';

const Login = ({ navigation }) => {
    const [state, setState] = useState({
        isLoading: false,
        email: '',
        password: '',
        isSecure: true
    })
    const { isLoading, email, password, isSecure } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const isValidData = () => {
        const error = validator({
            email,
            password,

        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }

    const onLogin = () => {
        const checkValid = isValidData()
        if (checkValid) {
            navigation.navigate('TabRoutes')
        }
    }
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ flex: 2, justifyContent: 'center' }}>
                        <ImageBackground source={require('../../assets/Splash.png')} style={{ height: "100%", width: "100%" }} >
                            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../../assets/logo.png')} style={{ height: 100, width: 100, }} />
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={styles.main}>

                        <View>
                            <Text style={styles.text}>Welcome Back</Text>
                        </View>
                        <View>
                            <Text style={styles.text1}>Login</Text>
                        </View>
                        <View>
                            <Text style={styles.text2}> Please login to your account.</Text>
                        </View>

                        <View style={styles.textInput}>
                            <View>
                                <InputText
                                    placeHolder="Email Address"
                                    onChangeText={(email) => updateState({ email })}
                                />
                                <Icon1
                                    name="mail"
                                    color='grey'
                                    size={25}
                                    style={styles.inputIcon}
                                />
                            </View>
                            <View>
                                <InputText
                                    placeHolder="Password"
                                    isSecure={isSecure}
                                    secureTextEntry={isSecure}
                                    onChangeText={(password) => updateState({ password })}
                                />
                                <Icon
                                    name="lock-outline"
                                    color='grey'
                                    size={25}
                                    style={styles.inputIcon}
                                />
                            </View>
                        </View>

                        <View style={{ alignSelf: 'flex-end' }}>
                            <Text style={styles.text3} onPress={() => navigation.navigate('Signup')}> Forgot Password?</Text>
                        </View>

                        <View style={{ top: 50 }}>
                            <ButtonWithLoader
                                text="Login"
                                onPress={onLogin}
                            />
                            <Text style={styles.text4}>
                                Don't have an account?
                                <Text style={styles.text5} onPress={() => navigation.navigate('Signup')}> Create new now!</Text>
                            </Text>
                            <View style={{ top: 5, }}>
                                <Text style={styles.text4}>
                                    By signing up, you are agree with our
                                    <Text style={styles.text5} onPress={() => navigation.navigate('')}> Terms & Conditions</Text>
                                </Text>
                            </View>
                        </View>

                    </View>

                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#176EFF'
    },
    image: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
    },
    main: {
        flex: 5,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'white',
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        alignItems: 'center',
        paddingHorizontal: '7%'
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#176EFF',
        alignSelf: 'center',
        top: 15,
    },
    text1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#7A7A7A',
        alignSelf: 'center',
        top: 20,
    },
    text2: {
        fontSize: 16,
        color: '#1D2226',
        alignSelf: 'center',
        top: 20,
    },
    text3: {
        fontSize: 16,
        color: '#176EFF',
        top: 20,
    },
    text4: {
        fontSize: 12,
        color: '#1D2226',
        top: 10,
        alignSelf: 'center',
    },
    text5: {
        color: '#176EFF',
        top: 10,
        alignSelf: 'center',
    },

    textInput: {
        backgroundColor: 'white',
        top: 30,
    },
    inputIcon: {
        position: 'absolute',
        alignSelf: 'flex-end',
        margin: 5,
        right: 10,
        top: 10
    },
    icon: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        top: 10
    }
});

export default Login;
