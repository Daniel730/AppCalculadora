import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import App from './src/App';

export default class calculadora extends Component {
  render() {
    return (
      <View>
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent('calculadora', () => calculadora);
