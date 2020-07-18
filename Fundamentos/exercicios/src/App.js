import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
/*
import FlexBox from './componentes/layout/FlexBoxV4';
import Primeiro from './componentes/Primeiro';
import MinMax from './componentes/MinMax';
import Aleatorio from './componentes/numeroAleatorio';
import Frag from './componentes/Titulo';
import Botao from './componentes/botao';
import Contador from './componentes/contador';
import Direta from './componentes/direta/pai';
import Indireta from './componentes/indireta/pai';
import ContadorV2 from './componentes/contador/Contador';
import ImparPar from './componentes/ParImpar';

import Membro from './componentes/relacao/Filho';
import Familia from './componentes/relacao/Pai';
import UsuarioLogado from './componentes/usuarioLogado';
import ListaDeProdutos from './componentes/produtosV2/listaProdutos';
import DigiteSeuNome from './componentes/DigiteSeuNome';
import Quadrado from './componentes/layout/Quadrado'
*/

import Mega from './componentes/Megasena/Mega';




export default () => {

    return (
        <SafeAreaView style={Style.App}>
            {/* <Primeiro />
            <UsuarioLogado usuario={{nome:"Raphael",sobrenome:"Barbosa Rodrigues"}} />
            <MinMax min={2} max={40} />
            <Aleatorio min={10} max={196} />
            <Frag titulo="Tituloo" subtitulo="Subtitulo" />
            <Botao />
            <Contador inicial={3} soma={9} />
            <Direta />
            <Indireta />
        <ContadorV2 />
        <ImparPar num={3}/> 
        <UsuarioLogado /> 
    <Familia>
        <Membro nome="Raphael" sobrenome="Barbosa Rodrigues" />
        <Membro nome="Sophya" sobrenome="Barbosa Rodrigues" />
    </Familia>
    <Familia>
        <Membro nome="asd" sobrenome="asd asd" />
        <Membro nome="sa" sobrenome="asd saaaaaaaaaaaaaa" />
    </Familia>
    <ListaDeProdutos />
    <DigiteSeuNome />
    <FlexBox />
    */}
    <Mega quantidade={5} />
        </SafeAreaView>
    )
}

const Style = new StyleSheet.create({
    App: {
        backgroundColor: "#ADA",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        color: "#FFF",
        padding: 20,

    },
});




