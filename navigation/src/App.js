import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import CentralText from './components/CentralText';

import AScreen from './views/aScreen';
import BScreen from './views/bScreen';
import CScreen from './views/cScreen';

export default class App extends React.Component {
    render() {
        return (
            <SafeAreaView style={style.container}>
                <AScreen />
                <BScreen />
                <CScreen />
            </SafeAreaView>
        )
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
    }
});