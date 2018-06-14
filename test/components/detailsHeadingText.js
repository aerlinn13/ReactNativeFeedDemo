import React from 'react';
import normalize from "react-native-elements/src/helpers/normalizeText";
import { FontColor, Font, TitleFontColor } from '../styles/globalStyles';

import {
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';

export default class DetailsHeadingText extends React.PureComponent {

  constructor(props) {
    super(props);
    console.log(props)
  }

  render(){
    return (
      [
        <Text key={'title'} style={[styles.infoHeader, styles.alignItem]}>{this.props.title}</Text>,
        <Text  key={'time'} style={[styles.time, styles.alignItem]}>{this.props.subTitle}</Text>,
        <Text key={'redeemed'} style={[styles.redeemedText, styles.alignItem]}>Redeemed 512 times</Text>
      ]
    )
  }
}

const dimensions = Dimensions.get('window');
const windowWidth = dimensions.width;
const horizontalPosition = 30;

const styles = StyleSheet.create({
  infoHeader:{
    fontFamily:Font,
    fontWeight:'bold',
    fontSize:normalize(30),
    color:TitleFontColor,
    backgroundColor:'transparent'
  },
  time :{
    fontFamily:Font,
    color:FontColor,
    fontSize:normalize(16),
    marginTop:10
  },
  redeemedText:{
    fontSize:normalize(10),
    color:FontColor,
    marginTop:20
  },
  alignItem: {
    marginLeft:horizontalPosition,
    width:windowWidth - horizontalPosition*2
  },
});
