import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { FontColor, TitleFontColor, MainBgColor, Font } from '../styles/globalStyles';


export default class UnImplemented extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Not implemented at present
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MainBgColor,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:TitleFontColor
  }
});
