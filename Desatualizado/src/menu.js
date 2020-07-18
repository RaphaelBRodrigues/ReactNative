import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import ParImpar from './componentes/parImpar.js';
import {MegaSena, Inverter} from './componentes/multi.js';
import Contador from './componentes/Contador.js';
import Plataforma from './componentes/Plataformas.js';
import Evento from './componentes/Evento.js';
import {Avo , Pai} from './componentes/ComunicacaoDIreta.js';
import {TextoSincronizado} from './componentes/ComunicacaoIndireta.js';
import ValidarProps from './componentes/validarProps.js';
import iff from './componentes/if.js';
import listaFlex from './componentes/listaFlex';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="listaFlex"
          component={listaFlex}
        />

        <Drawer.Screen 
        name="Indireta"
        component={TextoSincronizado}
        />    
        <Drawer.Screen 
          name="Avo"
          component={Avo}
          initialParams={{nome:"Raphael",sobrenome:"Rodrigues"}}
        />



<Drawer.Screen 
name="Evento" 
component={Evento} />


        <Drawer.Screen
          name="ValidarProps"
          component={ValidarProps}
          initialParams={{ano: 5}}
        />

        <Drawer.Screen name="Plataforma" component={Plataforma} />

        <Drawer.Screen
          name="Contador"
          component={Contador}
          initialParams={{numero: 8}}
        />
        <Drawer.Screen
          name="Inverter"
          component={Inverter}
          initialParams={{user: 'me'}}
        />
        <Drawer.Screen name="ParImpar" component={ParImpar} />
        <Drawer.Screen name="MegaSena" component={MegaSena} />

        <Drawer.Screen name="Condicional" component={iff} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default class Menu extends React.Component {
  render() {
    return MyDrawer();
  }
}
