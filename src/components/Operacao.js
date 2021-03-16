import React, {Component} from 'react';
import { Picker, StyleSheet, View } from 'react-native';

export default class Operacao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            operacao: ''
        }
    }
    render() {
        return(
            <View>
                <Picker 
                    style={styles.operacao} 
                    selectedValue={this.props.operacao} 
                    onValueChange={operacao => {
                        this.props.attValor(operacao, "operacao");
                    }}
                >
                    <Picker.Item label="Soma" value="soma" />
                    <Picker.Item label="Subtração" value="subtracao" />
                    <Picker.Item label="Multiplicação" value="multiplicacao" />
                    <Picker.Item label="Divisão" value="divisao" />
                </Picker>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    operacao: {
        marginTop: 15,
        marginBottom: 15
    }
})