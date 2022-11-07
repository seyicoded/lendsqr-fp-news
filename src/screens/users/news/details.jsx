import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { Image } from 'react-native-elements';
import { ActivityIndicator } from 'react-native-paper';

export default function Details({navigation, route}) {
    const {item} = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon onPress={()=> navigation.goBack()} style={{ zIndex: 99 }} name='chevron-left' size={24} />
                <Text style={styles.headerText}>News Detail</Text>
            </View>
            <ScrollView style={{ flex: 1 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.topic}>{item.topic}</Text>
                <Image PlaceholderContent={<ActivityIndicator color={'blue'} />} style={styles.itemImage} source={{ uri: item.media }} />
                <Text style={styles.summary}>{item.summary}</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        padding: 20,
        paddingTop: 10
    },
    headerText: {
        textAlign: 'center',
        flex: 1,
        right: 20,
        fontWeight: '700',
        fontSize: 18
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        paddingVertical: 12,
        fontWeight: '600'
    },
    itemImage: {
        width: '92%',
        height: 320,
        marginHorizontal: '4%',
        overflow: 'hidden',
        borderRadius: 4
    },
    topic: {
        paddingHorizontal: 20,
        paddingBottom: 8,
        fontStyle: "italic",
        textAlign: 'right'
    },
    summary: {
        padding: 20,
        textAlign: "justify"
    }
})