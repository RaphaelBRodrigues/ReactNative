import React, { Component } from 'react';
import { Text, TextInput, Button ,View } from 'react-native';
import Estilo from '../../estilo';
import Numero from './Numero';

export default class MegaSena extends Component {


    state = {
        quantidade: this.props.quantidade,
        numeros: []
    };

    // constructor(props){
    //     super(props);
    //     this.alterarQuantidade = this.alterarQuantidade.bind(this);
    // }
    // alterarQuantidade(numero){
    //     this.setState({ quantidade: numero });

    // }

    alterarQuantidade = (numero) => {
        this.setState({ quantidade: numero });



    }

    gerarNumeros = () => {
        const numeros = [];
        let i = 0;
        let aleatorio = 0;

        while (numeros.length < this.state.quantidade) {
            aleatorio = Math.floor(Math.random() * 60) +1;

            if (numeros.includes(aleatorio)) {
                continue;
            
            }
            numeros.push(aleatorio);
            // numeros[i] = aleatorio;
            i++;
        }
        
        this.setState({ numeros: numeros });
    }

    exibirNumeros = () => {
        const nums = this.state.numeros;
        return nums.map((n) => {
            return(
                <Numero num={n} /> 
            );
        })
    }



    render() {
        return (
            <>
                <Text style={Estilo.txtGrande}>
                    Gerador MegaSena
                </Text>
           
                <TextInput
                    keyboardType="decimal-pad"
                    style={{ borderBottomWidth: 1, textAlign:"center" }}
                    placeholder="Quantidade de números"
                    value={`${this.state.quantidade}`}
                    onChangeText={this.alterarQuantidade}
                />


                <Button
                    title="Gerar"
                    onPress={this.gerarNumeros}
                    
                />
            <View style={{
                flexDirection:"row",
                flexWrap:"wrap",
                justifyContent:"center"
            }}>
                {this.exibirNumeros()}
                </View>
            </>
        );
    }
}