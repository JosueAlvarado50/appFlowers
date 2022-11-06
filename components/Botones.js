import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";

export function BotonPlantas(props) {
  const { onPress, text } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.botonPlantas}>
      <Text style={styles.textoBotonPlantas}> {text} </Text>
    </TouchableOpacity>
  );
}
export function BotonCerrarSesion(props) {
  const { onPress, text } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.botonSalir}>
      <Text style={styles.textoBotonSalir}> {text} </Text>
    </TouchableOpacity>
  );
}
export function BotonIniciarSesion(props) {
  const { onPress, text } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.botonPlantas}>
      <Text style={styles.textoBotonPlantas}> {text} </Text>
    </TouchableOpacity>
  );
}
export function CampoFormulario(props) {
  const { onPress, text, placeholder } = props;
  return (
    <>
      <Text style = {styles.textoFormulario} > {text} </Text>
      <TextInput placeholder={placeholder} style={styles.campoFormText}></TextInput>
    </>
  );
}
export function CampoFormularioLogin (props) {
  const { onPress, text, placeholder } = props;
  return (
    <>
      <Text style = {styles.textoFormularioLogin} > {text} </Text>
      <TextInput placeholder={placeholder} style={styles.campoFormTextLogin}></TextInput>
    </>
  );
}

const styles = StyleSheet.create({
  botonPlantas: {
    alignSelf: "center",
    backgroundColor: "#000",
    width: "50%",
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#fff",
    margin: 7,
    padding: 10,
  },
  textoBotonPlantas: {
    color: "#32ea00",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  botonSalir: {
    alignSelf: "center",
    backgroundColor: "#fff",
    width: "25%",
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#000",
    margin: 7,
    padding: 10,
    alignSelf: "flex-end",
  },
  textoBotonSalir: {
    color: "#ff0000",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
  textoFormulario: {
    color: "#fff",
    padding: 10,
    marginStart: 10,
    flexDirection: "row",
    alignSelf: "flex-start",
    fontWeight: "bold"
  },
  campoFormText: {
    width: "60%",
    backgroundColor: "#1f1f1f",
    borderRadius: 10,
    color: "#d5fecd",
    height: 30,
    paddingStart:15 ,
    borderColor: "#fff",
    borderWidth: 1,
    marginStart: 30,
    marginBottom: 10,
    flexDirection: "row",
  },
  textoFormularioLogin: {
    color: "#fff",
    padding: 10,
    marginStart: 10,
    flexDirection: "row",
    alignSelf: "center",
    fontWeight: "bold"
  },
  campoFormTextLogin: {
    width: "45%",
    backgroundColor: "#1f1f1f",
    borderRadius: 10,
    color: "#d5fecd",
    height: 30,
    paddingStart:15 ,
    borderColor: "#fff",
    borderWidth: 1,
    marginBottom: 10,
    flexDirection: "row",
    alignSelf: "center"
  },
});
