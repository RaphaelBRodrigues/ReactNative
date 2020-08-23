import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native';



export default (props) => {
    return (
        <Modal onRequestClose={props.onCancel}
            transparent={true}
            visible={props.isVisible} animationType="slide"
        >
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Selecione o Nível
                    </Text>
                    <TouchableOpacity style={[styles.button, styles.bgEasy]} onPress={props.onLevelSelected(0.1)}>
                        <Text style={styles.buttonText}>
                            Fácil
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgNormal]} onPress={props.onLevelSelected(0.2)}>
                        <Text style={styles.buttonText}>
                            Normal
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgHard]} onPress={props.onLevelSelected(0.4)}>
                        <Text style={styles.buttonText}>
                            Difícil
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>


        </Modal>
    );
}

const styles = StyleSheet.create({
    frame:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"rgba(0,0,0,0.1)",
    },
    container:{
        backgroundColor:"#EEE",
        alignItems:"center",
        justifyContent:"center",
        padding:15
    },
    title:{
        fontWeight:"bold",
        fontSize:30
    },
    button:{
        marginTop:10,
        padding:5
    },
    buttonLabel:{
        fontSize:20,
        color:"#EEE",
        fontWeight:"bold"
    },
    bgEasy:{
        backgroundColor:"#0F0",
    },
    bgNormal:{
        backgroundColor:"#2765F7",
    },
    bgHard:{
        backgroundColor:"#F248",
    }
    
});

