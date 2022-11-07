import { View, Text, StyleSheet, Image } from "react-native";
import { BotonIniciarSesion, CampoFormulario } from "../components/Botones";
import React, { useState } from "react";
import axios from "axios";

//import { useNavigate } from 'react-router-dom'

const endpoint = "http://localhost:8000/api/usuario";

const Registrarse = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");

  const [value, setValue] = useState({
    nombre: "",
    email: "",
    password: "",
    telefono: "",
  });

  const addUser = async () => {
    const request = {};
    request.nombre = value.nombre;
    request.email = value.email;
    request.password = value.password;
    request.telefono = value.telefono;

    const obj = { nombre, email, password, telefono };
    const { data } = await axios.post(endpoint, request, {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": '*',
        'Access-Control-Allow-Headers': '*'
      },
    });
    console.log(data);
  };

  /*  const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [telefono, setTelefono] = useState('')
    const navigate = useNavigate(); */

  /* const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {nombre: nombre, email: email, password: password, telefono: telefono} )
        navigate('/')
    } */

  return (
    <View style={styles.fondoComponente}>
      <Text style={styles.tituloComponente}>Registrarse en AppFlowers</Text>
      <Image
        style={styles.imagenInicio}
        source="https://cdn-icons-png.flaticon.com/512/1598/1598431.png"
      />
      <Text style={styles.subtituloComponente}>
        Ingresa los datos para registrarte
      </Text>

      <CampoFormulario
        onChangeText={(text) => setValue({ ...value, nombre: text })}
        value={nombre}
        placeholder="Ingresa tu nombre..."
        text="Nombre: "
      ></CampoFormulario>
      <CampoFormulario
        onChangeText={(text) => setValue({ ...value, email: text })}
        value={email}
        placeholder="Ingresa tu email..."
        text="Email: "
      ></CampoFormulario>
      <CampoFormulario
        onChangeText={(text) => setValue({ ...value, password: text })}
        value={password}
        placeholder="Ingresa una contraseña..."
        text="Contraseña: "
      ></CampoFormulario>
      <CampoFormulario
        onChangeText={(text) => setValue({ ...value, telefono: text })}
        value={telefono}
        placeholder="Ingresa tu número telefonico..."
        text="Telefono: "
      ></CampoFormulario>

      <BotonIniciarSesion onPress={addUser} text="Registrate" />
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
    backgroundColor: "#0aa000",
  },
  subtituloComponente: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    padding: 5,
  },
  imagenInicio: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
});

export default Registrarse;
