import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import InputText from '../../components/InputText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Feather';




const Analytics = ({ navigation }) => {


    return (
        <ScrollView>
            <ImageBackground source={require('../../assets/Splash.png')} >
                <View style={styles.container}>
                    <View style={{ flex: 1.5, justifyContent: 'center', marginLeft: 30 }}>
                        <Text style={{ fontSize: 50, color: '#fff', fontWeight: 'bold' }}>Analytics</Text>
                    </View>

                    <View style={styles.main}>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                            <TouchableOpacity style={styles.btnStyle}>
                                <Text style={styles.textstyle}>Custom</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnStyle}>
                                <Text style={styles.textstyle}>All</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnStyle, { backgroundColor: '#2979FF' }]}>
                                <Text style={styles.textstyle1}>This Month</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnStyle}>
                                <Text style={styles.textstyle}>Last Month</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnStyle}>
                                <Text style={styles.textstyle}>Last Year</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={{ flex: 5, backgroundColor: '#fff', }}>

                            <View style={styles.box}  >

                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Icon
                                        name="warning"
                                        color='#FF0000'
                                        size={40}
                                        style={{ position: 'absolute', alignSelf: 'center' }}
                                    />
                                </View>
                                <View style={{ flex: 2, }}>
                                    <Text style={styles.text2}>Over Due</Text>
                                    <Text style={styles.text1}>Rs.1,50,245</Text>
                                </View>
                            </View>

                            <View style={{ flex: 2, marginTop: 20, marginBottom: 20, }}>
                                <View style={styles.box} >


                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <Icon
                                            name="check-circle"
                                            color='#19BD00'
                                            size={40}
                                            style={{ position: 'absolute', alignSelf: 'center' }}
                                        />
                                    </View>
                                    <View style={{ flex: 2, }}>
                                        <Text style={styles.text2}>Paid</Text>
                                        <Text style={styles.text1}>Rs.1,50,245</Text>
                                    </View>

                                </View>
                            </View>

                            <View style={styles.box} >


                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Icon
                                        name="watch-later"
                                        color='#FFBC00'
                                        size={40}
                                        style={{ position: 'absolute', alignSelf: 'center' }}
                                    />
                                </View>
                                <View style={{ flex: 2, }}>
                                    <Text style={styles.text2}>Unpaid</Text>
                                    <Text style={styles.text1}>Rs.1,50,245</Text>
                                </View>

                            </View>


                            <View
                                style={{ flex: 0.5, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}
                                onPress={() => setModalVisible(true)}
                            // onPressIn={() => navigation.navigate('Model')}
                            >
                            </View>

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
        paddingHorizontal: '3%'
    },
    box: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderColor: '#707070',
        borderRadius: 15,
        borderWidth: 0.5,

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
        fontWeight: '300',
        color: '#000',
        top: 20,
    },

    text2: {
        fontSize: 16,
        fontWeight: '500',
        color: '#176EFF',
        top: 20
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
        alignItems: 'center',
        alignSelf: 'center',
        width: 60,
        // backgroundColor: 'green',
        borderRadius: 10,
        borderColor: '#2979FF',
        borderWidth: 2,

    },
    textstyle: {
        fontSize: 11,
        fontWeight: '300',
        color: '#2979FF',

    },
    textstyle1: {
        fontSize: 11,
        fontWeight: '300',
        color: '#fFF',

    },
});

export default Analytics;
