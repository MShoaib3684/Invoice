import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile, Invoices, Analytics, Customer, Customers, Invoice1 } from '..';
import { Image, Text } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Feather';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SvgXml } from 'react-native-svg';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabRoutes = ({ navigation }) => {
    return (

        <BottomTab.Navigator
            barStyle={{ paddingBottom: 50 }}
            tabBar={(tabsProps, barStyle) => (
                <>
                    <BottomTabBar {...tabsProps}{...barStyle} />
                </>
            )}
            initialRouteName="Home"
            screenOptions={{ header: () => null }}

        >


            <BottomTab.Screen name="Home" component={Home}
                options={{
                    // headerShown: false,
                    // tabBarLabel: ({ focused }) => (
                    //     <Text>Home</Text>
                    // ),
                    tabBarIcon: ({ focused }) => (
                        <Icon name="home" size={25}
                            style={{
                                color: focused ? '#2979FF' : '#777777', opacity: focused ? 1 : 1
                            }} />
                    ),
                }}

            />
            <BottomTab.Screen name="Invoices" component={Invoices}
                options={{
                    // headerShown: false,
                    // tabBarLabel: ({ focused }) => (
                    //     <Text>Invoices</Text>
                    // ),
                    tabBarIcon: ({ focused }) => (
                        // <Image source={require('../assets/i.png')}
                        //     style={{ color: focused ? '#2979FF' : '#777777', opacity: focused ? 1 : 1 }} />
                        <SvgXml
                            style={{ color: focused ? '#2979FF' : '#777777', opacity: focused ? 5 : 1 }}
                            xml={` <svg xmlns="http://www.w3.org/2000/svg" width="28.098" height="28.106" viewBox="0 0 28.098 28.106">
                            <g id="Group_21" data-name="Group 21" transform="translate(0.5 0.5)" opacity="0.2">
                                <g id="Group_232" data-name="Group 232">
                                    <path id="Path_28" data-name="Path 28" d="M158.181-694.764q0-2.422,0-4.844c0-.555.169-.725.727-.709a11.072,11.072,0,0,1,7.137,2.74,10.915,10.915,0,0,1,3.845,7.187,10.944,10.944,0,0,1-2.568,8.611,10.883,10.883,0,0,1-7.31,3.953,10.935,10.935,0,0,1-8.717-2.692A11.069,11.069,0,0,1,147.5-687.5a9.2,9.2,0,0,1-.1-1.378c0-.469.181-.654.654-.655h8.715c.382,0,.764-.009,1.146,0,.212.007.271-.075.27-.277C158.178-691.462,158.181-693.113,158.181-694.764Zm1,.686q0,2.465,0,4.931c0,.444-.168.611-.615.611h-9.9c-.245,0-.267.026-.241.258.029.258.047.517.088.773a10.051,10.051,0,0,0,3.8,6.532,9.968,9.968,0,0,0,9.073,1.862,10.263,10.263,0,0,0,7.573-10.477,10.213,10.213,0,0,0-1.222-4.331,10.2,10.2,0,0,0-4.216-4.192,10.172,10.172,0,0,0-4.038-1.181c-.281-.023-.3-.021-.3.261Q159.183-696.554,159.183-694.078Z" transform="translate(-142.88 704.847)" stroke="#2979FF" stroke-width="1" />
                                    <path id="Path_29" data-name="Path 29" d="M111.684-742.128q0,2.6,0,5.191c0,.509-.183.695-.685.695h-10.4c-.569,0-.731-.221-.705-.8a12.082,12.082,0,0,1,.4-2.708,11.109,11.109,0,0,1,2.539-4.593,11.224,11.224,0,0,1,6.67-3.578,14.187,14.187,0,0,1,1.571-.129c.406-.02.61.211.61.661q0,2.552,0,5.1Q111.684-742.2,111.684-742.128Zm-1,0q0-2.292,0-4.584c0-.307,0-.318-.318-.294a8.4,8.4,0,0,0-.879.1,10.2,10.2,0,0,0-7.149,4.9,9.84,9.84,0,0,0-1.413,4.449c-.023.3-.01.3.291.3h9.168c.3,0,.3,0,.3-.3Q110.682-739.832,110.682-742.124Z" transform="translate(-99.887 748.047)" stroke="#2979FF" stroke-width="1" />
                                </g>
                            </g>
                        </svg>
 `} />
                    ),
                }}
            />
            <BottomTab.Screen name="Analytics" component={Analytics}
                options={{
                    // headerShown: false,
                    // tabBarLabel: ({ focused }) => (
                    //     <Text>Analytics</Text>
                    // ),
                    tabBarIcon: ({ focused }) => (
                        // <Image source={require('../assets/an.png')}
                        //     style={{ color: focused ? '#2979FF' : '#777777', opacity: focused ? 1 : 1 }} />
                        <SvgXml
                            style={{ color: focused ? '#2979FF' : '#777777', opacity: focused ? 2 : 1 }}
                            xml={` <svg xmlns="http://www.w3.org/2000/svg" width="22.494" height="22.494" viewBox="0 0 22.494 22.494">
                            <path id="Icon_open-graph" data-name="Icon open-graph" d="M19.766,0,11.247,8.435,8.435,5.623,0,14.143l2.812,2.812,5.623-5.708,2.812,2.812L22.494,2.812ZM0,19.682v2.812H22.494V19.682Z" fill="#777777"  stroke="#777" stroke-width="0.1" />
                        </svg>
                        `} />
                    ),
                }}
            />
            <BottomTab.Screen name="Customers" component={Customers}
                options={{
                    // headerShown: false,
                    // tabBarLabel: ({ focused }) => (
                    //     <Text>Customers</Text>
                    // ),
                    tabBarIcon: ({ focused }) => (
                        <Icon name="format-list-bulleted" size={25}
                            style={{
                                color: focused ? '#2979FF' : '#777777', opacity: focused ? 1 : 1
                            }} />
                    ),
                }}
            />
            <BottomTab.Screen name="Profile" component={Profile}
                options={{
                    // headerShown: false,
                    // tabBarLabel: ({ focused }) => (
                    //     <Text>Profile</Text>
                    // ),
                    tabBarIcon: ({ focused }) => (
                        <Icon1 name="user" size={25}
                            style={{ color: focused ? '#2979FF' : '#777777', opacity: focused ? 1 : 1 }} />
                    ),
                }}
            />


            {/* <BottomTab.Screen name="Home" component={Home} /> */}
            {/* <BottomTab.Screen name="Profile" component={Profile} /> */}
        </BottomTab.Navigator>

    )
}

export default TabRoutes