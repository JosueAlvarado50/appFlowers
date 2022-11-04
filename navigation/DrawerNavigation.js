import react from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import acercaDe from "../pages/acercaDe";
import contacto from "../pages/contacto";
import inicio from "../pages/inicio";
import miPerfil from "../pages/miPerfil";
import misPlantas from "../pages/misPlantas";

const drawer = createDrawerNavigator()

export function DrawerNavigation(){
    return(
        <drawer.Navigator>
            <drawer.Screen name="Mi Perfil." component={miPerfil} />
            <drawer.Screen name="Inicio." component={inicio} />
            <drawer.Screen name="Mis Plantas." component={misPlantas} />
            <drawer.Screen name="Acerca De..." component={acercaDe} />
            <drawer.Screen name="Contacto." component={contacto} />
        </drawer.Navigator>
    )

}