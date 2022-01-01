import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile, Invoices, Analytics, Customer, Customers, Invoice1 } from '..';
import { Image, Text } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Feather';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


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
                        <Image source={require('../assets/i.png')}
                            style={{ color: focused ? '#2979FF' : '#777777', opacity: focused ? 1 : 1 }} />
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
                        <Image source={require('../assets/an.png')}
                            style={{ color: focused ? '#2979FF' : '#777777', opacity: focused ? 1 : 1 }} />
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