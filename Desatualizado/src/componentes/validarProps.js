import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

function ValidarProps({ route } , props ){
    return <Text style={{ fontSize:44 }}> 

            {/* Pegando o valor padrão do defaultProps porque estou usando o initialParams */}
        {props.label}  

    {route.params.ano + 2000}  
     </Text>
} 


ValidarProps.defaultProps = {
    label: 'Ano:'
 }

 ValidarProps.proptypes = {
     ano : PropTypes.number.isRequired
 }
 
 export default ValidarProps;
