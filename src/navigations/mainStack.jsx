import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ROUTE from '../constant/route';
import Login from '../screens/guest/login/login';
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Register from '../screens/guest/register/register';

const Stack = createStackNavigator();

export default function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: {backgroundColor: 'white', paddingTop: getStatusBarHeight(true),} }}>
                <Stack.Screen name={ROUTE.LOGIN} component={Login}/>
                <Stack.Screen name={ROUTE.SIGNUP} component={Register}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}