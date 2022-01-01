import React from 'react';
import { Customer1, EditProfile, Invoice1 } from '..';
// import { Home, Profile } from "..";
import TabRoutes from './TabRoutes';
// import { TabRoutes } from '../navigations/TabRoutes';

export default function (Stack) {
    return (
        <>
            <Stack.Screen name="Home" component={TabRoutes} />
            <Stack.Screen name="Invoice1" component={Invoice1} />
            <Stack.Screen name="Customer1" component={Customer1} />




            {/* <Stack.Screen name="EditProfile" component={EditProfile} /> */}

        </>
    )
} 