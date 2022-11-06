import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import COLOR from '../../../constant/color'
import { Button } from 'react-native-paper'
import ROUTE from '../../../constant/route'

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.login}>Lendsqr{'\n'}Login</Text>
            
            <View style={{ marginTop: 15 }}>
                <Button color='blue' mode='contained'>Sign In with Google</Button>
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