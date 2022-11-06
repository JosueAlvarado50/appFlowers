import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";

const MenuBotonItem = ({text, onPress, image}) => {
  return (
    <TouchableOpacity style = {styles.botonContainer} onPress={onPress}>

        <Image  
            source={{ uri: image }}
            style =  { styles.imagenMenu}
        />
      <Text style = {styles.textoSecundario} > {text} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    botonContainer: {
        marginStart: 25,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 5,
        padding:10,
        borderStyle: 'solid',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textoSecundario: {
        color: '#20a000',
        padding: 1,
        fontSize: 15,
        fontWeight: 'bold',
        marginStart: 5
    }, 
    imagenMenu: {
        width:80,
        height: 80,
        borderRadius: 40,
        borderColor: "#000000",
        borderStyle: 'solid',
        borderWidth: .5        
    }
})

export default MenuBotonItem;
