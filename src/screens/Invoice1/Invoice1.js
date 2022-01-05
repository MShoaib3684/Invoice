import React, { useRef } from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import RBSheet from "react-native-raw-bottom-sheet";
import Setting from '../Setting/Setting';
import Icon1 from "react-native-dynamic-vector-icons";
import { RadioButton } from 'react-native-paper';
// import { RadioButton } from 'react-native'
import { RoundedCheckbox, PureRoundedCheckbox, } from "react-native-rounded-checkbox";

const Invoice1 = ({ navigation }) => {
    const refRBSheet = useRef();
    const [checked, setChecked] = React.useState(false);
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    // const [checked3, setChecked3] = React.useState(false);


    const renderIconCheckbox = (
        checkedColor: string,
        uncheckedColor: string,
        isChecked: boolean,
        checkedValue: boolean,
        onPress: (checked: boolean) => void,
    ) => (
        <View style={{ marginLeft: 1 }}>
            <PureRoundedCheckbox
                text="L"
                isChecked={isChecked}
                checkedColor={checkedColor}
                uncheckedColor={uncheckedColor}
                onPress={onPress}
            >
                <Icon1
                    size={26}
                    name="check"
                    type="Entypo"
                    color={checkedValue ? "#fdfdfd" : "transparent"}
                />
            </PureRoundedCheckbox>
        </View>
    );



    const renderColorCheckboxes = () => (
        <View style={{ backgroundColor: '#fff', }}>

            <View
                style={{
                    // backgroundColor: 'green',

                    right: 8,
                    flexDirection: "row",
                }}
            >
                {renderIconCheckbox("#fff", "#08b5ca", true, checked, () =>
                    setChecked(!checked),
                )}
            </View>
        </View>
    );

    const renderColorCheckboxes1 = () => (
        <View style={{ backgroundColor: '#fff', }}>

            <View
                style={{
                    // backgroundColor: 'green',

                    right: 8,
                    flexDirection: "row",
                }}
            >
                {renderIconCheckbox("#fff", "#08b5ca", true, checked1, () =>
                    setChecked1(!checked1),
                )}
            </View>
        </View>
    );
    const renderColorCheckboxes2 = () => (
        <View style={{ backgroundColor: '#fff', }}>

            <View
                style={{
                    // backgroundColor: 'green',

                    right: 8,
                    flexDirection: "row",
                }}
            >
                {renderIconCheckbox("#fff", "#08b5ca", true, checked2, () =>
                    setChecked2(!checked2),
                )}
            </View>
        </View>
    );
    return (
        <>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                animationType={"slide"}
                keyboardAvoidingViewEnabled
                height={300}
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
                        <Text style={styles.text4}>Update Invoice Status</Text>
                        <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                            <Icon
                                name="highlight-off"
                                color='grey'
                                size={35}
                                style={styles.inputIcon}
                            />
                        </TouchableOpacity>
                    </View>


                    <View style={{ flex: 4, }}>
                        <View style={styles.radio}>
                            {/* <RoundedCheckbox
                                value="Active"
                                color='#2979FF'
                                status={checked === 'Active' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('Active')}
                            /> */}
                            {renderColorCheckboxes()}
                            <View>
                                <Text style={{ fontSize: 20, color: '#000' }}>Active</Text>
                            </View>
                        </View>
                        <View style={styles.radio}>
                            {/* <RadioButton
                                value="Pending"
                                color='#2979FF'
                                status={checked === 'Pending' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('Pending')}
                            /> */}
                            {renderColorCheckboxes1()}
                            <View>
                                <Text style={{ fontSize: 20, color: '#000' }}>Pending</Text>
                            </View>
                        </View>
                        <View style={styles.radio}>
                            {/* <RadioButton
                                value="Completed"
                                color='#2979FF'
                                status={checked === 'Completed' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('Completed')}
                            /> */}
                            {renderColorCheckboxes2()}
                            <View>
                                <Text style={{ fontSize: 20, color: '#000' }}>Completed</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[{ flex: 1, margin: 15 }]}>
                        <ButtonWithLoader
                            text1='Update'
                        />
                    </View>
                </View>
            </RBSheet>

            <ScrollView>
                <View style={styles.container}>

                    <View style={{ flex: 0.7, top: 15, left: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text}>Invoice # 001</Text>
                        <TouchableOpacity style={[styles.btnStyle, { backgroundColor: '#2979FF', top: 10 }]}>
                            <Text style={styles.textstyle1}>Active</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ margin: 5, color: '#000', }}>Date : 01-01-1999</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text1}>From:</Text>
                        <Text style={styles.text2}>User Name Here</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                name="location-on"
                                color='grey'
                                size={25}
                                style={styles.inputIcon}
                                position="absolute"
                            />
                            <Text>This is Adress</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                name="phone"
                                color='grey'
                                size={25}
                                style={styles.inputIcon}
                                position="absolute"
                            />
                            <Text>+92 300 8764218 , +92 300 8764218</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                name="language"
                                color='grey'
                                size={25}
                                style={styles.inputIcon}
                                position="absolute"
                            />
                            <Text>www.web.com</Text>
                        </View>

                    </View>

                    <View style={{ flex: 0.7, flexDirection: 'row', justifyContent: 'space-between', top: 10 }}>
                        <Text style={styles.text1}>Billed to:</Text>
                        <Text style={styles.text2}>Customer Name Here</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                name="location-on"
                                color='grey'
                                size={25}
                                style={styles.inputIcon}
                                position="absolute"
                            />
                            <Text>This is Adress</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                name="phone"
                                color='grey'
                                size={25}
                                style={styles.inputIcon}
                                position="absolute"
                            />
                            <Text>+92 300 8764218 , +92 300 8764218</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                name="language"
                                color='grey'
                                size={25}
                                style={styles.inputIcon}
                                position="absolute"
                            />
                            <Text>www.web.com</Text>
                        </View>
                    </View>

                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-between', top: 10 }}>
                        <Text style={styles.text3}>Description</Text>
                        <Text style={styles.text3}>Price</Text>
                        <Text style={styles.text3}>Quantity</Text>
                        <Text style={styles.text3}>Total</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1, alignItems: 'center' }}>
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
                    <View style={{ flex: 1, flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1, alignItems: 'center' }}>
                        <View style={{ flex: 2, }}>
                            <Text style={{ color: '#000' }}>Lorem ipsum dolor sit amet,... </Text>
                            {/* consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. */}
                            <Text style={{ color: 'grey' }}> discount (5%)</Text>
                        </View>
                        <View style={{ flex: 3.5, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>100</Text>
                            <Text>1</Text>
                            <Text>100</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1, alignItems: 'center' }}>
                        <View style={{ flex: 2, }}>
                            <Text style={{ color: '#000' }}>Lorem ipsum dolor sit amet,... </Text>
                            {/* consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. */}
                            <Text style={{ color: 'grey' }}> discount (5%)</Text>
                        </View>
                        <View style={{ flex: 3.5, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>100</Text>
                            <Text>1</Text>
                            <Text>100</Text>
                        </View>
                    </View>
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

                    <View style={{ bottom: 25, backgroundColor: '#176EFF', borderRadius: 50, width: 30, height: 30, alignItems: 'center', alignSelf: 'flex-end' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('CreateInvoice')}>
                            <Text style={{ color: "#fff", fontSize: 30, bottom: 5, }}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.4, bottom: 30 }}>
                        <ButtonWithLoader
                            text1="Change Status"
                            onPress={() => refRBSheet.current.open()}
                        />
                    </View>

                </View>
            </ScrollView>
        </>
    )
}

export default Invoice1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#fff',
        paddingHorizontal: '5%',

    },
    text: {
        fontSize: 30,
        color: '#000',
    },
    radio: {
        flex: 3,
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
        color: '#fff',

    },
    btnStyle: {
        // backgroundColor: 'green',
        height: 25,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: '#2979FF',
        borderWidth: 2,

    },
    btnStyle1: {
        height: 110,
        width: 250,
        backgroundColor: "#2979FF",
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 50,
    },
})
