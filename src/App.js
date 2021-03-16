import React, {Component} from 'react';
import { View } from 'react-native';

import { Topo, Resultado, Painel } from './components';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: '',
            num2: '',
            operacao: 'soma',
            resultado: ''
        }

        this.calcular = this.calcular.bind(this);
        this.attValor = this.attValor.bind(this);
    }

    attValor(val, num) {
        const obj = {};
        obj[num] = val
        this.setState(obj)
    }

    calcular(){
        let resultado = 0;
        switch(this.state.operacao){
            case 'soma':
                resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
                break;
            case 'subtracao':
                resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
                break;
            case 'multiplicacao':
                resultado = parseFloat(this.state.num1) * parseFloat(this.state.num2);
                break;
            case 'divisao':
                resultado = parseFloat(this.state.num1) / parseFloat(this.state.num2);
                break;
            default:
                resultado = 0;
        }

        this.setState({resultado: resultado.toString()})
    }
    render() {
        return (
            <View>
                <Topo />
                <Resultado resultado={this.state.resultado} />
                <Painel 
                    num1={this.state.num1}
                    num2={this.state.num2}
                    operacao={this.state.operacao}
                    calcular={this.calcular}
                    attValor={this.attValor}
                />
            </View>
        )
    }
}