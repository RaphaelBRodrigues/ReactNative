import React,{ Component } from 'react';
import { View , Text , TouchableHighlight } from 'react-native';

export default class Contador extends Component{

    state = {
        label : 'teste',
        numero : 0,
    }

    constructor(props){
        super(props);
        
        
        //definindo o this, de soma para a classe Contador
        this.soma = this.soma.bind(this);

    }

    limpar = () => {
        this.setState({ numero : 0 });
    }
   
    soma = () => {
        this.setState({ numero: this.state.numero + 1 });
    }

  

  render(){
      return(
          <View>

            <TouchableHighlight
                onPress={() => this.soma()}
                onLongPress={this.limpar}
            >
             <Text style={{fontSize:40}}>{this.state.numero}</Text>

            </TouchableHighlight>
     

                                

          </View>
      )
  }
}