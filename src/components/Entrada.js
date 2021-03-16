import React from 'react';
import { StyleSheet, View } from 'react-native';
import Numero from './Numero';

export default props => (
    <View style={styles.numeros}>
        <Numero num={props.num1} nome="num1" attValor={props.attValor} />
        <Numero num={props.num2} nome="num2" attValor={props.attValor} />
    </View>
)

const styles = StyleSheet.create({
    numeros:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    }
})