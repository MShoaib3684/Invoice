import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import RBSheet from "react-native-raw-bottom-sheet";
import InputText from '../../components/InputText';
import Icon1 from 'react-native-vector-icons/Feather';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import validator from '../../utils/validations';
import { showError } from '../../utils/helperFunction';



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
        price: "RS. 300"

    },
    {
        id: "2",
        image: require("../../assets/Splash.png"),
        Text: "Invoice no # 002",
        date: "21/06/2020",
        button: "Over Due",
        price: "RS. 300"
    },
    {
        id: "3",
        image: require("../../assets/Splash.png"),
        Text: "Invoice no # 001",
        date: "21/06/2020",
        button: "Active",
        price: "RS. 300"
    },
    {
        id: "4",
        image: require("../../assets/Splash.png"),
        Text: "Invoice no # 002",
        date: "21/06/2020",
        button: "Over Due",
        price: "RS. 300"
    },
    {
        id: "4",
        image: require("../../assets/Splash.png"),
        Text: "Invoice no # 001",
        date: "21/06/2020",
        button: "Active",
        price: "RS. 300"
    },
    {
        id: "4",
        image: require("../../assets/Splash.png"),
        Text: "Invoice no # 002",
        date: "21/06/2020",
        button: "Over Due",
        price: "RS. 300"
    },
];

const Customer1 = ({ navigation }) => {
    const refRBSheet = useRef();



    const [state, setState] = useState({
        isLoading: false,
        userName: '',
        location: '',
        phoneNo: '',
        website: '',
        description: '',
        price: '',
        quantity: '',
        discount: '',
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
            website,
            description,
            price,
            quantity,
            discount
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
        alert('Items Addedd Successfully')
        const checkValid = isValidData()
        if (checkValid) {
            alert('Items Addedd Successfully')
            navigation.navigate('Home')
        }
    }


    return (
        <>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                animationType={"slide"}
                keyboardAvoidingViewEnabled
                height={500}
                customStyles={{
                    wrapper: {
                        // backgroundColor: "",
                        // backgroundColor: 'rgba(181,181, 181, 0.8)',

                    },
                    draggableIcon: {
                        backgroundColor: "#fff",
                    },
                    container: {
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30
                    },

                }}
            >
                <View style={[styles.container, { justifyContent: 'space-between' }]}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                        <Text style={styles.text4}>Edit Customer</Text>
                        <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                            <Icon
                                name="highlight-off"
                                color='grey'
                                size={35}
                            // style={styles.inputIcon}
                            />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.main}>

                        <View>
                            <TouchableOpacity style={{ bottom: 10 }}>
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
            </RBSheet>


            <ScrollView>
                <View style={styles.container}>

                    <View style={{ flex: 1.7, top: 20 }}>

                        <Text style={styles.text2}>Customer Name Here</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <TouchableOpacity style={[styles.btnStyle, { top: 20 }]} onPress={() => refRBSheet.current.open()}>
                                <Text style={styles.textstyle1}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'column', }}>

                            <View style={{ flexDirection: 'row' }}>
                                <Icon
                                    name="location-on"
                                    color='grey'
                                    size={25}
                                    // style={styles.inputIcon}
                                    position="absolute"
                                />
                                <Text>  This is Adress</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon
                                    name="phone"
                                    color='grey'
                                    size={25}
                                    // style={styles.inputIcon}
                                    position="absolute"
                                />
                                <Text>  +92 300 8764218 , +92 300 8764218</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon
                                    name="language"
                                    color='grey'
                                    size={25}
                                    // style={styles.inputIcon}
                                    position="absolute"
                                />
                                <Text>  www.web.com</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{ flex: 0.9, top: 30, left: 10 }}>
                        <Text style={styles.text}>Invoices</Text>
                    </View>

                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={styles.btnStyle}>
                            <Text style={styles.textstyle}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btnStyle, { backgroundColor: '#2979FF' }]}>
                            <Text style={styles.textstyle2}>Active</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnStyle}>
                            <Text style={styles.textstyle}>Pending</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnStyle}>
                            <Text style={styles.textstyle}>Over Due</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnStyle}>
                            <Text style={styles.textstyle}>Closed</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 6, }}>

                        <View style={{ flex: 3, }}>
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
                                            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Customer1')}>
                                                <View>
                                                    <Image source={require('../../assets/uber.png')} style={{ height: 40, width: 40, }} />
                                                </View>
                                                <View>
                                                    <Text style={styles.text1}>{item.Text}</Text>
                                                    <Text>{item.date}</Text>

                                                </View>

                                                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'space-around' }}>
                                                    <TouchableOpacity style={styles.btnStyle1}>
                                                        <Text style={styles.textstyleactive}>{item.button}</Text>
                                                    </TouchableOpacity>
                                                    <View style={{ top: 10 }}>
                                                        <Text style={styles.text1}>{item.price}</Text>
                                                    </View>
                                                </View>

                                            </TouchableOpacity>


                                        </View>
                                    )
                                }} />


                        </View>


                        {/* Floating Button  */}

                        {/* <View style={{
                        flex: 1,
                        width: Dimensions.get('window').width / 1.1,
                        height: Dimensions.get('window').height / 2,
                    }}>
                        <View style={{ bottom: 25, backgroundColor: '#176EFF', borderRadius: 50, width: 30, height: 30, alignItems: 'center', alignSelf: 'flex-end' }}>
                            <TouchableOpacity>
                                <Text style={{ color: "#fff", fontSize: 30, bottom: 5, }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                     */}
                    </View>


                </View>
            </ScrollView>
        </>
    )
}

export default Customer1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        // backgroundColor: '#176EFF',
        paddingHorizontal: '5%',

    },
    main: {
        flex: 1,
        // backgroundColor: 'green',
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        alignItems: 'center',
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
    text1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    btnStyle: {
        alignItems: 'center',
        alignSelf: 'center',
        width: 55,
        // backgroundColor: 'green',
        borderRadius: 10,
        borderColor: '#2979FF',
        borderWidth: 2,

    },
    btnStyle1: {
        width: 60,
        height: 20,
        alignItems: 'center',
        // alignSelf: 'center',
        // justifyContent: 'flex-end',
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

    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',

    },
    text2: {
        fontSize: 25,
        fontWeight: '300',
        color: '#000',

    },
    textstyle1: {
        fontSize: 12,
        fontWeight: '400',
        color: '#176EFF',

    },
    textstyleactive: {
        fontSize: 11,
        fontWeight: '300',
        color: '#2979FF',

    },

    textstyle2: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#fFF',

    },

    text4: {
        fontSize: 22,
        color: '#176EFF',
        fontWeight: 'bold'
    },

    inputIcon: {
        position: 'absolute',
        alignSelf: 'flex-end',
        margin: 5,
        right: 10,
        top: 10
    },
    textInput: {
        flex: 5,
        // backgroundColor: '#fff212',
        top: 20,
        justifyContent: 'space-evenly'
    },
})
