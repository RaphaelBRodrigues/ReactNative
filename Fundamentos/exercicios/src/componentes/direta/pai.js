import React, { Fragment } from 'react';
import { Text } from 'react-native'
import Estilo from '../estilo';
import Filho from './filho';

export default () => {
    let x = 13;
    let y = 100;

    return (
        <Fragment>
            <Filho a={x} b={y} />
        </Fragment>
    );
}