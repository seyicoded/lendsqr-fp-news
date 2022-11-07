import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import COLOR from '../../../constant/color'
import { Button, TextInput } from 'react-native-paper'
import ROUTE from '../../../constant/route'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useState } from 'react'
import { googleCall } from '../../../function/googleSignin'
import { useDispatch, useSelector } from 'react-redux'
import { updateAppLoader, updateLoggedIn } from '../../../storage/redux/action/action'
import { updateUser } from '../../../function/firebaseAction'

export default function Register({navigation}) {
    const [inputData, setInputData] = useState({
        email: "",
        fullName: "",
        phoneNumber: ""
    })
    const dispatch = useDispatch()

    const selector = useSelector(state => state)
    useEffect(()=>{
        if(selector.isLoggedIn){
            navigation.replace(ROUTE.HOME)
        }
    }, [selector.isLoggedIn])

    const handleLogin = async ()=>{
        const _res = await googleCall()
        console.log(_res)

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
    }
    return (
        <View style={styles.container}>
            <View>
                <Icon onPress={()=> navigation.goBack()} name='chevron-left' style={styles.back} />
                <Text style={styles.title}>Registration</Text>
            </View>
            
            <View style={{ marginTop: 15, padding: 20 }}>
                <Text style={{ marginBottom: 20 }}>fill the form below or have access to the platform</Text>

                <TextInput mode='outlined' placeholder='Email Address' style={{ backgroundColor: 'white', marginBottom: 7 }} value={inputData.email} onChangeText={val => setInputData({...inputData, email: val})} />
                <TextInput mode='outlined' placeholder='Full Name' style={{ backgroundColor: 'white', marginBottom: 7 }} value={inputData.fullName} onChangeText={val => setInputData({...inputData, fullName: val})} />
                <TextInput mode='outlined' placeholder='Phone Number' style={{ backgroundColor: 'white', marginBottom: 7 }} value={inputData.phoneNumber} onChangeText={val => setInputData({...inputData, phoneNumber: val})} />
                <Text />

                <Button onPress={()=> {processLogin()}} color='blue' mode='contained'>Create Account</Button>

                <Text style={{ textAlign: 'center', marginVertical: 10 }}>OR</Text>
                <Button color='darkblue' mode='contained' onPress={()=> handleLogin()}>Sign Up with Google</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    back: {
        position: 'absolute',
        top: 2,
        left: 5,
        fontSize: 32,
        padding: 8,
        zIndex: 99
    },
    title: {
        fontWeight: '800',
        fontSize: 38,
        textAlign: 'center',
        color: COLOR.PRIMARY,
        marginBottom: 18
    }
})