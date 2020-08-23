import React from 'react';
import { TouchableHighlight, View, StyleSheet, Text , TouchableWithoutFeedback } from 'react-native';
import params from '../params';
import setarCorDoCampo from './corDoCampo';
import Mine from './Mine';
import Flag from './Flag';

const Field = (props) => {
    const { mined, opened, nearMines, exploded, flagged } = props;

    const styleField = [styles.field];


    if (flagged) { styleField.push(styles.flagged); }
    if (opened) { styleField.push(styles.opened) };
    if (exploded) { styleField.push(styles.exploded) }

    if (!opened && !exploded) { styleField.push(styles.regular) }

    let color = setarCorDoCampo(nearMines);





    return (
        <TouchableWithoutFeedback
            onLongPress={props.onSelect}
            onPress={props.onOpen}
        >
        <View
            style={styleField}
            // onPress={() => {styleField.push(styles.opened); }}
        >
            <Text>
                {flagged && !opened ? <Flag />: false}

                {!mined && opened && nearMines > 0
                    ? <Text style={[styles.label, { color: color }]}>{nearMines}</Text>
                    : false}
                {mined && opened
                    ? <Mine /> 
                    : false
                }


            </Text>
        </View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    field: {
        backgroundColor: "#FFF",
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
        alignItems: "center",

    },
    regular: {
        backgroundColor: "#999",
        borderLeftColor: "#CCC",
        borderTopColor: "#CCC",
        borderRightColor: "#333",
        borderBottomColor: "#333",
    },
    opened: {
        backgroundColor: "#999",
        borderColor: "#777",
        flexDirection: "row",
        justifyContent: "center"
    },
    label: {

        fontWeight: "bold",
        fontSize: params.fontSize

    },
    exploded: {
        backgroundColor: "#F00",
        borderColor: "#F32"
    }


});





export default Field;