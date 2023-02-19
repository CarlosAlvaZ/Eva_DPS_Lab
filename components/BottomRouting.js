import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import userIcon from '../sources/user-icon.png'
import playIcon from '../sources/play-icon.png'
import settingsIcon from '../sources/settings-icon.png'

export default function BottomRouting() {
  return (
    <View style={styles.mainCard}>
      
        <TouchableOpacity style={styles.iconView}>
            <Image source={userIcon} style={styles.icon}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconView}>
            <Image source={playIcon} style={styles.icon}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconView}>
            <Image source={settingsIcon} style={styles.icon}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    mainCard : {
        width : '100%',
        height : '10%',
        backgroundColor : '#03213F',
        display : 'flex',
        flexDirection : 'row',
    },
    iconView : {
        width : '33%',
        height : '100%',
        padding : 10,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
    },
    icon : {
        width : '30%',
        height : '60%'
    }
})