/**
 * @format
 */

import {AppRegistry} from 'react-native';
//Importando a classe App criada no App.js
import App from './src/App';
import {name as appName} from './app.json';
import Menu from './src/menu.js';

AppRegistry.registerComponent(appName, () => Menu);
