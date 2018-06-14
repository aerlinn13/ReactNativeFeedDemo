import React from 'react';
import Styles from '../styles/globalStyles';
import { ScreenBackgroundColour } from '../styles/globalStyles';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';

export default class Loading extends React.PureComponent {
  render(){
    return (
      <View style={styles.container}>
      <Image 
        style={styles.image} 
        source={require('../static/loader.gif')}
      /> 
    </View>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent:'center', 
    alignItems:'center', 
    backgroundColor:ScreenBackgroundColour
  },
  image:{
    width:32,
    height:32, 
    top:'5%'
  }
});