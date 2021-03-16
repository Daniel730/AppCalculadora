import React, {Component} from 'react';
import {View} from 'react-native';
import Comando from './Comando';
import Entrada from './Entrada';
import Operacao from './Operacao';

const Painel = props => (
    <View>
        <Entrada num1={props.num1} num2={props.num2} attValor={props.attValor}/>
        <Operacao operacao={props.operacao} attValor={props.attValor} />
        <Comando acao={props.calcular}/>
    </View>
) 

export { Painel }