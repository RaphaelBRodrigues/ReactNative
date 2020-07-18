import React from 'react';
import { Button , Platform , Alert , ToastAndroid} from 'react-native';

export default (props) => {
    const notificar = msg => {
        if(Platform.OS === 'android'){
            ToastAndroid.show(msg, ToastAndroid.LONG);
        }else{
            Alert.alert('Informação',msg);
        }

    }
    return (
        <Button title='Plataforma?' onPress={() => notificar('Olá')} />
    )
}