import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import COLOR from '../../../constant/color'
import { Button } from 'react-native-paper'
import ROUTE from '../../../constant/route'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { googleCall } from '../../../function/googleSignin'
import { updateAppLoader, updateLoggedIn } from '../../../storage/redux/action/action'
import { updateUser } from '../../../function/firebaseAction'
import Toast from 'react-native-toast-message'

export default function Login({navigation}) {
    const [inputData, setInputData] = useState({
        email: "",
        fullName: "",
        phoneNumber: ""
    })
    const selector = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(()=>{
        if(selector.isLoggedIn){
            navigation.replace(ROUTE.HOME)
        }
    }, [selector.isLoggedIn])

    const handleLogin = async ()=>{
        const _res = await googleCall()
        console.log(_res, ": as user info")

        if(_res !== null){
            processLogin(_res.user.email, `${_res.user.familyName} ${_res.user.givenName}`)
        }
    }

    const processLogin = async (_email = inputData.email, _fullName = inputData.fullName)=>{
        updateAppLoader(true, dispatch);
        
        const _res = {
            email: _email,
            fullName: _fullName,
            phoneNumber: inputData.phoneNumber
        }
        await updateUser(_res)

        updateLoggedIn(true, _res, dispatch)
        updateAppLoader(false, dispatch);

        Toast.show({
            type: 'success',
            text1: "success"
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.login}>Lendsqr{'\n'}Login</Text>
            
            <View style={{ marginTop: 15 }}>
                <Button onPress={()=> handleLogin()} color='darkblue' mode='contained'>Sign In with Google</Button>
                <Text style={{ textAlign: 'center', marginVertical: 10 }}>OR</Text>
                <Button onPress={()=> navigation.navigate(ROUTE.SIGNUP)} color='black' mode='outlined'>Register</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    login: {
        fontWeight: '800',
        fontSize: 42,
        textAlign: 'center',
        color: COLOR.PRIMARY,
        marginBottom: 18
    }
})