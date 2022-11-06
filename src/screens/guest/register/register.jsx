import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import COLOR from '../../../constant/color'
import { Button } from 'react-native-paper'
import ROUTE from '../../../constant/route'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Register({navigation}) {
    return (
        <View style={styles.container}>
            <View>
                <Icon name='chevron-left' style={styles.back} />
                <Text style={styles.login}>Registration</Text>
            </View>
            
            <View style={{ marginTop: 15 }}>
                
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
        padding: 8
    },
    login: {
        fontWeight: '800',
        fontSize: 38,
        textAlign: 'center',
        color: COLOR.PRIMARY,
        marginBottom: 18
    }
})