import React from 'react';
import normalize from "react-native-elements/src/helpers/normalizeText";
import { FontColor, Font } from '../styles/globalStyles';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class InfoList extends React.PureComponent {
  render(){
    return (
      <View style={styles.infoListContainer}>
        <View alignItems={'center'}>
          <MaterialIcons name={"desktop-mac"} size={30} color={FontColor}/>
          <Text  style={styles.iconText}>Visit the website</Text>
        </View>
        <View alignItems={'center'}>
          <FontAwesome name={"map-marker"} size={30} color={FontColor}/>
          <Text style={styles.iconText}>Get directions</Text>
        </View>
        <View alignItems={'center'}>
          <MaterialIcons name={"call"} size={30} color={FontColor}/>
          <Text style={styles.iconText}>Call the venue</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  iconText:{
    fontSize:normalize(10), 
    color:FontColor,
    marginTop:10
  },
  infoListContainer:{
    marginTop:20, 
    flexDirection:'row',
    justifyContent: 'space-between', 
    padding:20, 
    borderTopColor:FontColor, 
    borderBottomColor:FontColor, 
    borderTopWidth:1, 
    borderBottomWidth:1
  },
  
});