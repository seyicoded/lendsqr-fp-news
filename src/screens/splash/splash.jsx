import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import COLOR from '../../constant/color'

export default function Splash() {
    return (
        <View style={styles.container}>
            <Animatable.Text animation={"fadeIn"} duration={3000} style={styles.title}>Lendsqr</Animatable.Text>
            <Animatable.Text animation={"fadeIn"} delay={1500} duration={1500} style={styles.desc}>OPADONU EMMANUEL OLUWASEYI</Animatable.Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 58,
        fontWeight: '700',
        color: COLOR.PRIMARY
    },
    desc: {
        fontSize: 10,
        fontWeight: '400'
    },
})