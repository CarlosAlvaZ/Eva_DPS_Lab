import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Search({ setFilter }) {
  return (
    <View style={styles.view}>
      <TextInput placeholder='Buscar por nombre' keyboardType='default' style={styles.textInput} onChange={e=>setFilter(e.nativeEvent.text)}/>
    </View>
  )
}

const styles = StyleSheet.create({
    view : {
        width : '100%',
        height : 80,
        backgroundColor : '#006ABC',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
    },
    textInput : {
        backgroundColor : '#fff',
        width : '90%',
        height : '70%',
        padding : 20,
        borderRadius : 10,
        fontSize : 16
    }
})