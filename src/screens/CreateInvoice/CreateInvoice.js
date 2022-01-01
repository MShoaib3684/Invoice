import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import RBSheet from "react-native-raw-bottom-sheet";
import Setting from '../Setting/Setting';
import { RadioButton, Checkbox } from 'react-native-paper';
import InputText from '../../components/InputText';
import Icon1 from 'react-native-vector-icons/Feather';
import validator from '../utils/validations';
import { showError } from '../utils/helperFunction';
import InputText1 from '../../components/InputText1';
import InputTextArea from '../../components/InputTextArea';
// import { RadioButton } from 'react-native'


const CreateInvoice = ({ navigation }) => {
    const refRBSheet = useRef();
    const refRBSheetTo = useRef();
    const refRBSheetAdd = useRef();
    const [checked, setChecked] = React.useState(false);
    // const [checked, setChecked] = React.useState('Active');



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
                    <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', }}>
                        <Text style={styles.text4}>Edit From (Company)</Text>
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

            <RBSheet
                ref={refRBSheetTo}
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
                    <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', }}>
                        <Text style={styles.text4}>Billed To</Text>
                        <TouchableOpacity onPress={() => refRBSheetTo.current.close()}>
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

                        <View style={{ alignSelf: 'flex-start', left: 25, flexDirection: 'row' }}>
                            <Checkbox
                                color='#2979FF'
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Text style={{ color: 'grey', fontWeight: 'bold', top: 10 }}>Create Customer</Text>
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

            <RBSheet
                ref={refRBSheetAdd}
                closeOnDragDown={true}
                closeOnPressMask={true}
                animationType={"slide"}
                keyboardAvoidingViewEnabled
                height={400}
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
                    <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', }}>
                        <Text style={styles.text4}>Add Item</Text>
                        <TouchableOpacity onPress={() => refRBSheetAdd.current.close()}>
                            <Icon
                                name="highlight-off"
                                color='grey'
                                size={35}
                            // style={styles.inputIcon}
                            />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.main}>


                        <View style={styles.textInput}>
                            <View>
                                <InputTextArea
                                    placeHolder="Description"

                                    onChangeText={(website) => updateState({ website })}
                                />

                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <InputText1
                                    placeHolder="Price"

                                    onChangeText={(website) => updateState({ website })}
                                />


                                <InputText1
                                    placeHolder="Quantity"

                                    onChangeText={(website) => updateState({ website })}
                                />
                            </View>
                            <View>
                                <InputText
                                    placeHolder="Discount (%)"

                                    onChangeText={(website) => updateState({ website })}
                                />
                            </View>
                        </View>
                        <View style={[styles.btnStyle, { flex: 1, }]}>
                            <ButtonWithLoader
                                text="Add"
                                onPress={onUpdate}
                            />
                        </View>


                    </View>

                </View>
            </RBSheet>
            <ScrollView>
                <View style={styles.container}>

                    <View style={{ flex: 0.7, top: 15, left: 5, flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={styles.text}>Create Invoice</Text>

                    </View>
                    <Text style={{ margin: 5, color: '#000', }}>Date : 01-01-1999</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text1}>From:</Text>
                        <TouchableOpacity style={[styles.btnStyle, { top: 10 }]} onPress={() => refRBSheet.current.open()}>
                            <Text style={styles.textstyle1}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'column', }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                name="person"
                                color='grey'
                                size={25}
                                // style={styles.inputIcon}
                                position="absolute"
                            />
                            <Text>User Name Here</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                name="location-on"
                                color='grey'
                                size={25}
                                // style={styles.inputIcon}
                                position="absolute"
                            />
                            <Text>This is Adress</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                name="phone"
                                color='grey'
                                size={25}
                                // style={styles.inputIcon}
                                position="absolute"
                            />
                            <Text>+92 300 8764218 , +92 300 8764218</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                name="language"
                                color='grey'
                                size={25}
                                // style={styles.inputIcon}
                                position="absolute"
                            />
                            <Text>www.web.com</Text>
                        </View>

                    </View>

                    <View style={{ flex: 0.7, flexDirection: 'row', justifyContent: 'space-between', top: 10 }}>
                        <Text style={styles.text1}>To:</Text>
                        <TouchableOpacity style={[styles.btnStyle, { top: 10 }]} onPress={() => refRBSheetTo.current.open()}>
                            <Text style={styles.textstyle1}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'column', }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                name="person"
                                color='grey'
                                size={25}
                                // style={styles.inputIcon}
                                position="absolute"
                            />
                            <Text>User Name Here</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                name="location-on"
                                color='grey'
                                size={25}
                                // style={styles.inputIcon}
                                position="absolute"
                            />
                            <Text>This is Adress</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                name="phone"
                                color='grey'
                                size={25}
                                // style={styles.inputIcon}
                                position="absolute"
                            />
                            <Text>+92 300 8764218 , +92 300 8764218</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                name="language"
                                color='grey'
                                size={25}
                                // style={styles.inputIcon}
                                position="absolute"
                            />
                            <Text>www.web.com</Text>
                        </View>
                    </View>

                    <View style={{ flex: 0.7, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text3}>Description</Text>
                        <Text style={styles.text3}>Price</Text>
                        <Text style={styles.text3}>Quantity</Text>
                        <Text style={styles.text3}>Total</Text>
                    </View>

                    <View style={{ flex: 1.5, flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1, alignItems: 'center' }}>
                        <View style={{ flex: 2, }}>
                            <Text style={{ color: '#000' }}>Lorem ipsum dolor sit amet,... </Text>
                            {/* consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. */}
                            <Text style={{ color: 'grey' }}> discount (5%)</Text>
                        </View>
                        <View style={{ flex: 3.5, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Text>100</Text>
                            <Text>1</Text>
                            <Text>100</Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={[styles.btnStyle1, { flex: 1, alignItems: 'center', justifyContent: 'center' }]}
                        onPress={() => refRBSheetAdd.current.open()}
                    >
                        <Text style={{ color: 'grey', fontSize: 25 }}>Add +</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{}}>
                            <Text>Discount</Text>
                            <Text>Tax</Text>
                            <Text>SubTotal</Text>
                            <Text>Total</Text>
                        </View>
                        <View style={{}}>
                            <Text>5%</Text>
                            <Text>4%</Text>
                            <Text>300 Rs</Text>
                            <Text>240 Rs</Text>

                        </View>

                    </View>


                    <TouchableOpacity style={[styles.btnStyle2, { flex: 1, backgroundColor: '#176EFF' }]}>

                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Preview</Text>

                    </TouchableOpacity>

                </View>
            </ScrollView>
        </>
    )
}

export default CreateInvoice

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#fff',
        paddingHorizontal: '5%',

    },
    main: {
        flex: 10,
        // backgroundColor: 'green',
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        color: '#000',
    },
    radio: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'green',
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.3,
    },

    text1: {
        fontSize: 20,
        color: '#000',

    },
    text2: {
        fontSize: 20,
        color: '#176EFF',

    },
    text3: {
        fontSize: 18,
        color: '#000',

    },
    text4: {
        fontSize: 22,
        color: '#176EFF',
        fontWeight: 'bold'
    },
    textstyle1: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#176EFF',

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
        backgroundColor: '#fff',
        top: 20,
        justifyContent: 'space-evenly'
    },
    btnStyle: {
        // backgroundColor: 'green',
        height: 25,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: '#2979FF',
        borderWidth: 1,

    },
    btnStyle1: {
        top: 10,
        height: 50,
        width: 200,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'grey',
        borderStyle: 'dashed',
    },
    btnStyle2: {
        flex: 1,
        height: 100,
        width: 150,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderColor: '#2979FF',
        borderWidth: 1,
        bottom: 20

    },
    btnStyle3: {
        top: 10,
        height: 50,
        width: 200,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'grey',
        // borderStyle: 'dashed',
    },

});
