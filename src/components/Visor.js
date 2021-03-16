import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default props => (
    <View>
        <TextInput 
            placeholder="Resultado" 
            editable={false} 
            style={styles.textInput}
            value={props.resultado}
        />
    </View>
)

const styles = StyleSheet.create({
    textInput: {
        height: 100,
        fontSize: 30
    }
})