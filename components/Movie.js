import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Movie({cover, name, duration, quality, classification}) {
  return (
    <View style={styles.card}>
        <Image source={{uri:cover}} style={styles.images} />
        <View style={styles.data}>
            <Text style={styles.name}>{name}</Text>

            <View style={styles.secondary}>
                <View style={styles.secCard}>
                    <Text style={styles.textCard}>{duration}</Text>
                </View>

                <View style={styles.secCard}>
                    <Text style={styles.textCard}>{quality}</Text>
                </View>

                <View style={styles.secCard}>
                    <Text style={styles.textCard}>{classification}</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card : {
        width : '95%',
        height : 150,
        backgroundColor : '#3f4c6b',
        borderRadius : 10,
        padding : 10,
        display : 'flex',
        flexDirection : 'row',
        marginVertical : 10
    },
    images : {
        width : '40%',
        height : '100%',
       flex : 1
    },
    data : {
        flex : 1.5,
        paddingVertical : 0,
        paddingHorizontal : 10,
        maxWidth : '80%'
    },
    name : {
        fontSize : 20,
        color : 'white'
    },
    secondary : {
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap'
    },
    secCard : {
        backgroundColor : 'black',
        width : 70,
        padding : 8,
        borderRadius : 5,
        margin : 3
    },
    textCard : {
        color : 'white'
    }
})
