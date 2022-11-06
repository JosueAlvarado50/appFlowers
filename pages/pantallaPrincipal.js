import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { BotonIniciarSesion } from '../components/Botones'

const pantallaPrincipal = () => {
  return (
    <View style = { styles.fondoComponente }>
      <Text style = {styles.tituloComponente}>Bienvnido a AppFlowers</Text>
      <Text style = {styles.tituloComponente}>Selecciona una opción</Text>

      <Image
        style={styles.imagenInicio}
        source="https://cdn-icons-png.flaticon.com/512/1598/1598431.png"
      />

      <BotonIniciarSesion text = "Iniciar Sesion" />
      <BotonIniciarSesion text = "Registrarse" />
      
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
        backgroundColor: '#0aa000',
        height: "93%"
    },
    imagenInicio: {
      width: 250,
      height: 250,
      alignSelf: "center",
      marginBottom: 10
    },
})

export default pantallaPrincipal