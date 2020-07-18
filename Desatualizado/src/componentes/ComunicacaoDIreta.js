import React from 'react';
import {View, Text} from 'react-native';

const fonte = {style: {fontSize: 30}};

const filhosImpo = (props) => {
    return React.Children.map(props.children,
        c => React.cloneElement(c,{ ...props,...c.props}));
}

export const Filho = (props) => {
  return (
    <View>
      <Text {...fonte}>
        Filho: {props.nome} {props.sobrenome}
      </Text>
    </View>
  );
};

export const Pai = (props) => {
  return (
    <View>
      <Text {...fonte}>
        Pai {props.nome} {props.sobrenome}
      </Text>
      {/* {props.children} */}
      {/* {React.cloneElement(props.children,{...props,...props.children} )} */}

      {filhosImpo(props)}
    </View>
  );
};

export const Avo = ({route}) => (
  <View>
    <Text {...fonte}>
      Avô {route.params.nome} {route.params.sobrenome}
    </Text>

    <Pai nome="André" sobrenome={route.params.sobrenome}>
      <Filho nome="Ana" />
       <Filho nome="ui" />
      <Filho nome="Davi" /> 
    </Pai>

    <Pai {...route.params} nome="Pedro">
      <Filho nome="Rebeca"></Filho>
      <Filho nome="Renata"></Filho> 
    </Pai>
  </View>
);
