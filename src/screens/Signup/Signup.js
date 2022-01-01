import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import InputText from '../../components/InputText';
import validator from '../utils/validations';
import { showError } from '../utils/helperFunction';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Feather';

const Signup = ({ navigation }) => {
    const [state, setState] = useState({
        isLoading: false,
        userName: '',
        email: '',
        password: '',
        isSecure: true
    })
    const { isLoading, userName, email, password, isSecure } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const isValidData = () => {
        const error = validator({
            userName,
            email,
            password
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }




    const onSignup = () => {

        // alert("please Fill your email and Password")
        // if (email == '' || password == '') {
        //     return
        // }

        const checkValid = isValidData()
        if (checkValid) {
            navigation.navigate('Signup')
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ flex: 1.5, justifyContent: 'center', flexDirection: 'row' }}>
                    <ImageBackground source={require('../../assets/Splash.png')} style={{ height: "100%", width: "100%" }} >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}>
                            <Image source={require('../../assets/logo.png')} style={{ height: 80, width: 80, }} />
                            <Text style={{ fontSize: 50, color: '#fff', fontWeight: 'bold' }}>Welcome</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.main}>

                    <View>
                        <Text style={styles.text}>Create an Account</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={require('../../assets/icon.png')} style={{ height: 50, width: 50, top: 20 }} />
                        </TouchableOpacity>
                    </View>




                    <View style={styles.textInput}>
                        <View>
                            <InputText
                                placeHolder="Username"
                                onChangeText={(userName) => updateState({ userName })}
                            />
                            <Icon1
                                name="user"
                                color='grey'
                                size={25}
                                style={styles.inputIcon}
                            />
                        </View>
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


                    <View style={{ top: 60 }}>
                        <ButtonWithLoader
                            text="Signup"
                            onPress={onSignup}
                        />
                        <Text style={styles.text4}>
                            Have an account?
                            <Text style={styles.text5} onPress={() => navigation.navigate('Login')}> Login Now</Text>
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
    inputIcon: {
        position: 'absolute',
        alignSelf: 'flex-end',
        margin: 5,
        right: 10,
        top: 10
    },
    text: {
        fontSize: 35,
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

    icon: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        top: 10
    }
});

export default Signup;
