import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Text, StyleSheet } from "react-native";
import acercaDe from "../pages/acercaDe";
import contacto from "../pages/contacto";
import inicio from "../pages/inicio";
import miPerfil from "../pages/miPerfil";
import misPlantas from "../pages/misPlantas";
import MenuBotonItem from "../components/MenuBotonItem";
import { BotonCerrarSesion } from "../components/Botones";
import pantallaPrincipal from "../pages/pantallaPrincipal";
import registrarse from "../pages/registrarse";
import login from "../pages/login";

const drawer = createDrawerNavigator();

export function DrawerNavigation() {
  return (
    <drawer.Navigator drawerContent={(props) => <MenuItems {...props} />}>
      
      <drawer.Screen name="Login" component={login} />
      <drawer.Screen name="Registrarse" component={registrarse} /> 
      <drawer.Screen name="Pantalla_Principal" component={pantallaPrincipal} /> 
      <drawer.Screen name="Inicio" component={inicio} /> 
      <drawer.Screen name="Mi_Perfil" component={miPerfil} />
      <drawer.Screen name="Mis_Plantas" component={misPlantas} />
      <drawer.Screen name="Acerca_De" component={acercaDe} />
      <drawer.Screen name="Contacto" component={contacto} />
    </drawer.Navigator>
  );
}
const MenuItems = ({ navigation }) => {
  return (
    <DrawerContentScrollView style={styles.container}>
      <Text style={styles.tituloComponente}>Menú Hamburguesa</Text>
        
      <MenuBotonItem
        image="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600"
        text="Pantalla de login"
        onPress={() => navigation.navigate("Login")}
      />
      <MenuBotonItem
        image="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600"
        text="Pantalla de registro"
        onPress={() => navigation.navigate("Registrarse")}
      />
      <MenuBotonItem
        image="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600"
        text="Pantalla Principal"
        onPress={() => navigation.navigate("Pantalla_Principal")}
      />
      <MenuBotonItem
        image="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600"
        text="Inicio"
        onPress={() => navigation.navigate("Inicio")}
      />
      <MenuBotonItem
        image="https://cdn-icons-png.flaticon.com/512/560/560277.png"
        text="Mi Perfil"
        onPress={() => navigation.navigate("Mi_Perfil")}
      />
      <MenuBotonItem
        image="https://images.pexels.com/photos/793012/pexels-photo-793012.jpeg?auto=compress&cs=tinysrgb&w=600"
        text="Mis Plantas"
        onPress={() => navigation.navigate("Mis_Plantas")}
      />
      <MenuBotonItem
        image="https://cdn-icons-png.flaticon.com/512/3815/3815602.png"
        text="Acerca de..."
        onPress={() => navigation.navigate("Acerca_De")}
      />
      <MenuBotonItem
        image="https://images.pexels.com/photos/5605061/pexels-photo-5605061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        text="Contacto"
        onPress={() => navigation.navigate("Contacto")}
      />
      <BotonCerrarSesion text = "Cerrar Sesion" />
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#4fe345",
  },
  tituloComponente: {
    fontSize: 20,
    color: "#fff",
    padding: 10,
    fontWeight: "bold",
  },
});
