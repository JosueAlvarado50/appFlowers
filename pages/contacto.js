import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const contacto = () => {
  return (
    <View style = { styles.fondoComponente }>
      <Text style = {styles.tituloComponente}>Contacto</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    tituloComponente: {
        fontSize: 30,
        color: '#fff',
        textAlign: "center",
        padding: 10
    },
    fondoComponente: 
    {
        backgroundColor: '#0aa000'
    }
})

export default contacto