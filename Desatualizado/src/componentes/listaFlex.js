import { React } from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';

const alunos = [
    { id: 1, nome: "Raphasael", nota: 5.5 },
    { id: 2, nome: "Raasdphael", nota: 2.5 },
    { id: 3, nome: "Rapdashael", nota: 9.5 },
    { id: 4, nome: "Raphael", nota: 10.5 },
    { id: 5, nome: "Raphaadsel", nota: 0.5 },
    { id: 6, nome: "Raphsdaael", nota: 2.5 },
    { id: 7, nome: "Rasphael", nota: 7.5 },
    { id: 8, nome: "Rael", nota: 3.5 },
    { id: 9, nome: "aRael", nota: 3.5 },
    { id: 11, nome: "Raphasael", nota: 5.5 },
    { id: 12, nome: "Raasdphael", nota: 2.5 },
    { id: 13, nome: "Rapdashael", nota: 9.5 },
    { id: 14, nome: "Raphael", nota: 10.5 },
    { id: 15, nome: "Raphaadsel", nota: 0.5 },
    { id: 16, nome: "Raphsdaael", nota: 2.5 },
    { id: 17, nome: "Rasphael", nota: 7.5 },
    { id: 18, nome: "Rael", nota: 3.5 },
    { id: 19, nome: "aRael", nota: 3.5 },
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#ADE',
    borderWidth: 0.5,
    borderColor: '#222'
}

export const Aluno = (props) => {
    <View style={itemEstilo}>
        <Text>
            Nome:{props.nome}
        </Text>
        <Text style={{ fontWeight: 'bold' }}>
            Nota:{props.nota}
        </Text>
    </View>
}

export default (props) => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem} keyExtractor={item => item.id} /> 
        </ScrollView>
    )
}

//(_,item) => index.toString()