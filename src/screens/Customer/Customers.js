import React from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';




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
        price: "RS. 300"

    },
    {
        id: "2",
        image: require("../../assets/Splash.png"),
        Text: "Invoice no # 002",
        date: "21/06/2020",
        price: "RS. 300"
    },
    {
        id: "3",
        image: require("../../assets/Splash.png"),
        Text: "Invoice no # 001",
        date: "21/06/2020",
        price: "RS. 300"

    },
    {
        id: "4",
        image: require("../../assets/Splash.png"),
        Text: "Invoice no # 002",
        date: "21/06/2020",
        price: "RS. 300"
    },
    {
        id: "5",
        image: require("../../assets/Splash.png"),
        Text: "Invoice no # 001",
        date: "21/06/2020",
        price: "RS. 300"

    },
    {
        id: "6",
        image: require("../../assets/Splash.png"),
        Text: "Invoice no # 002",
        date: "21/06/2020",
        price: "RS. 300"
    },
];

const Customer = ({ navigation }) => {
    return (

        <ScrollView>
            <View style={styles.container}>
                <View style={{ flex: 0.9, top: 30, left: 10 }}>
                    <Text style={styles.text}>My Customer</Text>
                </View>

                <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={styles.btnStyle}>
                        <Text style={styles.textstyle}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnStyle, { backgroundColor: '#2979FF' }]}>
                        <Text style={styles.textstyle1}>Active</Text>
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
                            data={DATA}
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

                                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                                <Icon
                                                    name="play-circle-filled"
                                                    color='#2979FF'
                                                    size={35}
                                                    style={{ position: 'relative', }}
                                                />
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
    )
}

export default Customer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        // backgroundColor: '#176EFF',
        paddingHorizontal: '5%',

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
    textstyle: {
        fontSize: 11,
        fontWeight: '300',
        color: '#2979FF',

    },
    textstyle1: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#fFF',

    },
    text: {
        fontSize: 30,
        fontWeight: '300',
        color: '#000',

    },
})
