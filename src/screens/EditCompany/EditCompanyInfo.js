import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import InputText from '../../components/InputText';
import validator from '../utils/validations';
import { showError } from '../utils/helperFunction';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Feather';

const EditCompanyInfo = ({ navigation }) => {
    const [state, setState] = useState({
        isLoading: false,
        userName: '',
        location: '',
        phoneNo: '',
        website: '',
        KeyboardEvent: 'numpad',
        isSecure: true
    })
    const { isLoading, userName, location, phoneNo, website, isSecure } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const isValidData = () => {
        const error = validator({
            userName,
            location,
            phoneNo,
            website
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }




    const onUpdate = () => {

        // alert("please Fill your email and Password")
        // if (email == '' || password == '') {
        //     return
        // }

        const checkValid = isValidData()
        if (checkValid) {
            navigation.navigate('Home')
        }
    }

    return (
        <ScrollView>
            <ImageBackground source={require('../../assets/Splash.png')} >
                <View style={styles.container}>
                    <View style={{ flex: 1.5, justifyContent: 'center', marginLeft: 30 }}>
                        <Text style={{ fontSize: 35, color: '#fff', fontWeight: 'bold' }}>Edit Company Info</Text>
                    </View>

                    <View style={styles.main}>


                        <View>
                            <TouchableOpacity>
                                <Image source={require('../../assets/icon.png')} style={{ height: 70, width: 70, top: 20 }} />
                            </TouchableOpacity>
                        </View>




                        <View style={styles.textInput}>
                            <View>
                                <InputText
                                    placeHolder="Name"
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
                                    placeHolder="Location"
                                    onChangeText={(location) => updateState({ location })}
                                />
                                <Icon
                                    name="location-on"
                                    color='grey'
                                    size={25}
                                    style={styles.inputIcon}
                                />
                            </View>
                            <View>
                                <InputText
                                    placeHolder="Phone No"
                                    numpad='true'
                                    onChangeText={(phoneNo) => updateState({ phoneNo })}
                                />
                                <Icon
                                    name="phone"
                                    color='grey'
                                    size={25}
                                    style={styles.inputIcon}
                                />
                            </View>
                            <View>
                                <InputText
                                    placeHolder="Website"

                                    onChangeText={(website) => updateState({ website })}
                                />
                                <Icon
                                    name="language"
                                    color='grey'
                                    size={25}
                                    style={styles.inputIcon}
                                />
                            </View>
                        </View>


                        <View style={{ flex: 1, justifyContent: 'space-evenly', }}>
                            <ButtonWithLoader
                                text1="Update"
                                onPress={onUpdate}
                            />
                        </View>


                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        // backgroundColor: '#176EFF'
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
        flex: 5,
        backgroundColor: '#fff',
        top: 30,
    },

    icon: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        top: 10
    }
});

export default EditCompanyInfo;
