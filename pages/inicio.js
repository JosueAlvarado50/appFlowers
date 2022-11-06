import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { BotonCerrarSesion, BotonPlantas } from "../components/Botones";
import misPlantas from "../pages/misPlantas";

const inicio = ({navigation}) => {
  return (
    <View style={styles.fondoComponente}>
      <Text style={styles.tituloComponente}>App Flowers</Text>
      <Image
        style={styles.imagenInicioLogo}
        source="https://cdn-icons-png.flaticon.com/512/1598/1598431.png"
      />
      <Text style={styles.subtituloComponente}>Bienvnido</Text>
      <Image
        style={styles.imagenInicio}
        source="https://images.pexels.com/photos/2137871/pexels-photo-2137871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Text style={styles.textoInicio}>
        Guía para aprender sobre las diferentes plantas del ecosistema
      </Text>
      <Text style={styles.textoSecundario}>
        En esta aplicación podrás realizar las siguientes acciones:
      </Text>
      <Text style={styles.textoAcciones}>
        - Guardar información de tus plantas.
      </Text>
      <Text style={styles.textoAcciones}>
        - Separar tus plantas por categorías.
      </Text>
      <Text style={styles.textoAcciones}>
        - Ver la información de tus plantas.
      </Text>
      <Text style={styles.textoAcciones}>
        - Ver y añadir tips para cuidar de tus plantas.
      </Text>
      <Text style={styles.textoAcciones}>
        - Editar tus datos y los de tus plantas.
      </Text>
      <BotonPlantas onPress = {() => navigation.navigate(misPlantas) } text = "Ver mis Plantas" />
      <BotonCerrarSesion text = "Cerrar Sesion" />
    </View>
  );
};

const styles = StyleSheet.create({
  tituloComponente: {
    fontSize: 35,
    color: "#fff",
    textAlign: "center",
    padding: 5,
    fontWeight: "bold",
  },
  subtituloComponente: {
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    padding: 5,
  },
  fondoComponente: {
    backgroundColor: "#0aa000",
  },
  textoInicio: {
    color: "#e3e3e3",
    padding: 10,
    textAlign: "center",
    fontSize: 25,
  },
  textoSecundario: {
    color: "#e3e3e3",
    padding: 10,
    textAlign: "left",
    fontSize: 20,
  },
  imagenInicio: {
    width: "100%",
    height: 300,
  },
  textoAcciones: {
    color: "#fff",
    padding: 5,
    fontSize: 16,
    marginStart: 25,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginEnd: 25,
    fontWeight: 'bold'
  },
  botonPlantas: {
    width: 30,
    height : 20,
    color: '#ffaa00'
  },
  imagenInicioLogo: {
      width: 150,
      height: 150,
      alignSelf: "center"
    },
});

export default inicio;
