import React from 'react';
import { CreateInvoice, Customer1, EditCompanyInfo, EditProfile, ForgotPassword, Invoice1, Login, Radio, ResetPassword, Setting, Signup, Splash } from "..";

import TabRoutes from './TabRoutes';


export default function (Stack) {
    return (
        <>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="TabRoutes" component={TabRoutes} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="EditCompanyInfo" component={EditCompanyInfo} />
            <Stack.Screen name="Invoice1" component={Invoice1} />
            <Stack.Screen name="CreateInvoice" component={CreateInvoice} />
            <Stack.Screen name="Customer1" component={Customer1} />
            {/* <Stack.Screen name="Setting" component={Setting} /> */}

        </>
    )
} 