import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import InputText from '../../components/InputText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Feather';




const Profile = ({ navigation }) => {

    const onLogout = () => {
        navigation.navigate('Login')
    }

    return (
        <ScrollView>
            <ImageBackground source={require('../../assets/Splash.png')} >
                <View style={styles.container}>
                    <View style={{ flex: 1.5, justifyContent: 'center', marginLeft: 30 }}>
                        <Text style={{ fontSize: 50, color: '#fff', fontWeight: 'bold' }}>Profile</Text>
                    </View>

                    <View style={styles.main}>

                        <View style={{ top: 20, flex: 0.15, backgroundColor: '#fff', flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
                            <View style={{ flex: 2, backgroundColor: '#fff', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '400' }} >Select Currency</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 2, backgroundColor: '', alignItems: 'flex-end', justifyContent: 'center' }}>
                                <Icon
                                    name="arrow-drop-down"
                                    color='grey'
                                    size={50}
                                    style={{ position: 'relative', }}
                                />
                            </View>
                        </View>

                        <View style={{ top: 20, flex: 0.15, backgroundColor: '#fff', flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
                            <View style={{ flex: 2, backgroundColor: '#fff', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '400' }} > Edit Profile</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 2, backgroundColor: '', alignItems: 'flex-end', justifyContent: 'center' }}>
                                <Icon
                                    name="arrow-right"
                                    color='grey'
                                    size={50}
                                    style={{ position: 'relative', }}
                                />
                            </View>
                        </View>

                        <View style={{ top: 20, flex: 0.15, backgroundColor: '#fff', flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
                            <View style={{ flex: 2, backgroundColor: '#fff', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '400' }} > Edit Company Info</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 2, backgroundColor: '', alignItems: 'flex-end', justifyContent: 'center' }}>
                                <Icon
                                    name="arrow-right"
                                    color='grey'
                                    size={50}
                                    style={{ position: 'relative', }}
                                />
                            </View>
                        </View>

                        <View style={{ top: 20, flex: 0.15, backgroundColor: '#fff', flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
                            <View style={{ flex: 2, backgroundColor: '#fff', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '400' }} >About Us</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 2, backgroundColor: '', alignItems: 'flex-end', justifyContent: 'center' }}>
                                <Icon
                                    name="arrow-right"
                                    color='grey'
                                    size={50}
                                    style={{ position: 'relative', }}
                                />
                            </View>
                        </View>


                        <View style={{ top: 20, flex: 0.15, backgroundColor: '#fff', flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
                            <View style={{ flex: 2, backgroundColor: '#fff', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '400' }} >Rate Us</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 2, backgroundColor: '', alignItems: 'flex-end', justifyContent: 'center' }}>
                                <Icon
                                    name="arrow-right"
                                    color='grey'
                                    size={50}
                                    style={{ position: 'relative', }}
                                />
                            </View>
                        </View>

                        <View style={{ flex: 0.30, justifyContent: 'flex-end', }}>
                            <TouchableOpacity style={styles.btnStyle} onpress={onLogout}>
                                <Text style={styles.textstyle}>Logout</Text>
                            </TouchableOpacity>

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
    },
    btnStyle: {
        height: 55,
        width: 300,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 30,
        borderColor: '#2979FF',
        borderWidth: 2,
        justifyContent: 'center'
    },
    textstyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2979FF',

    },
});

export default Profile;
