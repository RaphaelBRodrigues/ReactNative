import React, { Fragment } from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo';


export default (props) => {
    return (
        // <Fragment>
        <>
            <Text style={Estilo.txtGrande}>
                {props.titulo}
            </Text>
            <Text>
                {props.subtitulo}
            </Text>
        </>
        // </Fragment>  
    );

}