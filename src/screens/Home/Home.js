import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground, Image, Dimensions, TouchableOpacity, FlatList, LogBox } from 'react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import InputText from '../../components/InputText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Feather';



const DATA = [
    {
        id: "1",
        image: require("../../assets/Splash.png"),
        Text: "Customer no 1",
        date: "21/06/2020",
        icon: ""

    },
    {
        image: require("../../assets/Splash.png"),
        Text: "Customer no 2",
        date: "21/06/2020",
        icon: ""
    },
];

const DATA1 = [
    {
        id: "1",
        image: require("../../assets/Splash.png"),
        Text: "Invoice no # 001",
        date: "21/06/2020",
        button: "Active",


    },
    {
        id: "2",
        image: require("../../assets/Splash.png"),
        Text: "Invoice no # 002",
        date: "21/06/2020",
        button: "Closed"
    },
    {
        id: "3",
        image: require("../../assets/Splash.png"),
        Text: "Invoice no # 001",
        date: "21/06/2020",
        button: "Active"
    },
    {
        id: "4",
        image: require("../../assets/Splash.png"),
        Text: "Invoice no # 002",
        date: "21/06/2020",
        button: "Closed"
    },
    {
        id: "4",
        image: require("../../assets/Splash.png"),
        Text: "Invoice no # 001",
        date: "21/06/2020",
        button: "Active"
    },
    {
        id: "4",
        image: require("../../assets/Splash.png"),
        Text: "Invoice no # 002",
        date: "21/06/2020",
        button: "Closed"
    },
];




const Home = ({ navigation }) => {
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])
    return (
        <ScrollView>
            <ImageBackground source={require('../../assets/Splash.png')} >
                <View style={styles.container}>
                    <View style={{ flex: 1.5, justifyContent: 'center', flexDirection: 'row' }}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', right: 20 }}>
                            <Image source={require('../../assets/boy.png')} style={{ height: 80, width: 80, left: 30 }} />
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 14, color: '#fff', fontWeight: '300', right: 100 }}>Pending Balance</Text>
                                <Text style={{ fontSize: 40, color: '#fff', fontWeight: '300' }}>Rs.1,50,245</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.main}>

                        <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', top: 10 }}>
                            <View >
                                <Text style={{ color: 'black', fontSize: 20 }}>Customers</Text>
                            </View>
                            <TouchableOpacity style={styles.btnStyle}>
                                <Text style={styles.textstyle}>See All</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 3, }}>
                            <FlatList
                                // onRefresh={onRefresh}
                                // refreshing={isFetching}
                                // progressViewOffset={100}
                                // ListEmptyComponent={<Empty message="No data found." />}
                                data={DATA}
                                keyExtractor={(item, index) => `${index}`}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <View style={styles.item}>
                                                <View>
                                                    <Image source={require('../../assets/uber.png')} style={{ height: 40, width: 40, }} />
                                                </View>
                                                <View>
                                                    <Text style={styles.text1}>{item.Text}</Text>
                                                    <Text>{item.date}</Text>

                                                </View>

                                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                                    <Icon
                                                        name="play-circle-filled"
                                                        color='#2979FF'
                                                        size={35}
                                                        style={{ position: 'relative', }}
                                                    />
                                                </View>

                                            </View>
                                        </View>
                                    )
                                }} />
                        </View>

                        <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', }}>
                            <View >
                                <Text style={{ color: 'black', fontSize: 20 }}>Invoices</Text>
                            </View>
                            <TouchableOpacity style={styles.btnStyle}>
                                <Text style={styles.textstyle}>See All</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 5, }}>
                            <FlatList
                                // onRefresh={onRefresh}
                                // refreshing={isFetching}
                                // progressViewOffset={100}
                                // ListEmptyComponent={<Empty message="No data found." />}
                                data={DATA1}
                                keyExtractor={(item, index) => `${index}`}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <View style={styles.item}>
                                                <View>
                                                    <Image source={require('../../assets/uber.png')} style={{ height: 40, width: 40, }} />
                                                </View>
                                                <View>
                                                    <Text style={styles.text1}>{item.Text}</Text>
                                                    <Text>{item.date}</Text>

                                                </View>

                                                <TouchableOpacity style={styles.btnStyle1}>
                                                    <Text style={styles.textstyle1}>{item.button}</Text>
                                                </TouchableOpacity>

                                            </View>
                                        </View>
                                    )
                                }} />
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
        paddingHorizontal: '7%'
    },
    item: {
        flex: 1,
        paddingVertical: "5%",
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        justifyContent: 'space-between'
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
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
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
        width: 50,
        height: 25,
        alignItems: 'center',
        // alignSelf: 'center',
        justifyContent: 'center',
        // backgroundColor: 'green',
        borderRadius: 20,
        borderColor: '#2979FF',
        borderWidth: 2,

    },
    textstyle: {
        fontSize: 11,
        fontWeight: '300',
        color: '#2979FF',

    },
    btnStyle1: {

        alignItems: 'center',
        // alignSelf: 'center',
        justifyContent: 'flex-end',
        // backgroundColor: 'green',
        borderRadius: 20,
        borderColor: '#2979FF',
        borderWidth: 2,

    },
    textstyle1: {
        fontSize: 11,
        fontWeight: '300',
        color: '#2979FF',

    },
});

export default Home;
