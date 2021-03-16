import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default props => (
    <TextInput 
        style={styles.numero} 
        value={props.num} 
        onChangeText={value => {
            props.attValor(value, props.nome)
        }}
    />
);

const styles = StyleSheet.create({
    numero: {
        width: 140,
        height: 80,
        fontSize: 20
    }
})