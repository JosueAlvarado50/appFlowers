import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { BotonIniciarSesion, CampoFormularioLogin } from "../components/Botones";

const login = () => {
  return (
    <View style={styles.fondoComponente}>
      <Text style={styles.tituloComponente}>Inicia Sesion en AppFlowers</Text>
      <Image
        style={styles.imagenInicio}
        source="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
      />

    <CampoFormularioLogin placeholder="Ingresa tu email..." text="Email: " />
    <CampoFormularioLogin placeholder="Ingresa la contraseña..." text="Contraseña: " />

      <BotonIniciarSesion text = "Iniciar Sesion" />
    </View>
  );
};
const styles = StyleSheet.create({
    tituloComponente: {
      fontSize: 30,
      color: "#fff",
      textAlign: "center",
      padding: 10,
    },
    fondoComponente: {
      backgroundColor: "#2dff29",
      height: "93%"
    },
    subtituloComponente: {
      fontSize: 18,
      color: "#fff",
      textAlign: "center",
      padding: 5,
    },
    imagenInicio: {
        width: 250,
        height: 250,
        alignSelf: "center"
      },
  });
export default login;
