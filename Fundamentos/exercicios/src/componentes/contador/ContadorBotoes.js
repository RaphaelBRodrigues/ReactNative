import React from 'react';
import { Button, StyleSheet , View } from 'react-native';

export default ({ incrementarFunc, decrementarFunc , numero = "Vazio"}) => {

    return (
        <View style={style.botoes}>
            <Button
                title="Decrementar"
                onPress={() => {
                    decrementarFunc();
                }}
            />
            <Button
                title="Incrementar"
                onPress={() => {
                    incrementarFunc();
                }}
            />
        </View>
    );
}

const style = StyleSheet.create({
    botoes:{
        flexDirection:"row"
    }
});