import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ROUTE from '../constant/route';
import Login from '../screens/guest/login/login';
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Register from '../screens/guest/register/register';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native-paper';
import Home from '../screens/users/home/home';
import { useEffect } from 'react';
import { getUser } from '../storage/local/storage';
import { updateLoggedIn } from '../storage/redux/action/action';
import Details from '../screens/users/news/details';

const Stack = createStackNavigator();

export default function MainStack() {
    const selector = useSelector( state => state )
    const [fetchedFromStore, setFetchedFromStore] = useState(false);
    const [isSigned, setisSigned] = useState(false);

    const dispatch = useDispatch()

    useEffect(()=>{
        (async()=>{
            const __res = await getUser()
            
            console.log("reached signed in", __res)
            if(__res.status == true){
                setisSigned(true)
                updateLoggedIn(true, __res.data, dispatch)
                setTimeout(()=>{
                    setFetchedFromStore(true)
                }, 1000)
            }else{
                setisSigned(false)
                setFetchedFromStore(true)
            }
        })()
    }, [])

    if(!fetchedFromStore){
        return (<></>)
    }
  console.log(isSigned, "isSigned")
    return (
        <>
            {
                ((selector.appLoading) && (
                    <View style={{ position: 'absolute', zIndex: 999, justifyContent: 'center', alignItems: 'center', width: '100%', height: 200 }}>
                        <ActivityIndicator />
                    </View>
                ))
            }
            <NavigationContainer>
                <Stack.Navigator initialRouteName={isSigned ? ROUTE.HOME: ROUTE.LOGIN} screenOptions={{ headerShown: false, cardStyle: {backgroundColor: 'white', paddingTop: getStatusBarHeight(true),} }}>
                    <Stack.Screen name={ROUTE.LOGIN} component={Login}/>
                    <Stack.Screen name={ROUTE.SIGNUP} component={Register}/>
                    <Stack.Screen name={ROUTE.HOME} component={Home}/>
                    <Stack.Screen name={ROUTE.DETAILS} component={Details}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}