import React from 'react';
import { FontColor, TitleFontColor, MainBgColor, Font, HighlightContentColor } from '../styles/globalStyles';
import normalize from "react-native-elements/src/helpers/normalizeText";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class OpeningTimesListItem extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  _capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  _selectItem(item){

    var computeUnSelectedStyles = [
      styles.flatListViewItem, 
      item.index === item.lengthOfData || item.selectedPrevSibling === 1 ? styles.noBorderRight  : null
    ];

    if(item.is_open != 1){
      return (
        <View alignItems='center'  justifyContent='center' style={computeUnSelectedStyles}>
          <Text style={[styles.flatListTextItem, styles.strikeOut]}>
            {this._capitalize(item.day.substring(0,3))}
          </Text>
        </View>
      )
    }
    else if(item.selected === 1){
      return (
        <View alignItems='center' style={[styles.flatListViewItem, styles.selected, styles.noBorderRight]}>
          <Text style={styles.flatListTextItem}>
            {this._capitalize(item.day.substring(0,3))}
          </Text>
          <Text style={styles.flatListTime}>{`${item.open} - ${item.close}`}</Text>
        </View>
      )
    }
    else {
      return (
        <TouchableOpacity onPress={() => item.select(item.index, item.selected)} style={computeUnSelectedStyles}>
          <View alignItems='center'  justifyContent='center' style={styles.addPaddingVertical}>
            <Text style={styles.flatListTextItem}>
              {this._capitalize(item.day.substring(0,3))}
            </Text>
          </View>
        </TouchableOpacity>
      )
    }
  }
  render(){
    return (
      this._selectItem(this.props)
    )
  }
}

const styles = StyleSheet.create({
  flatListViewItem:{
    paddingVertical:10,
    paddingHorizontal:20,
    backgroundColor:'#2b2b2b',
    borderRightWidth: 1,
    borderRightColor: FontColor
  },
  addPaddingVertical:{
    paddingVertical:10,
  },
  flatListTextItem:{
    color:FontColor,
    fontSize:normalize(14),
  },
  flatListTime:{
    color:TitleFontColor,
    fontSize:normalize(14),
  },
  selected:{
    backgroundColor:'#343434',
    borderTopColor:HighlightContentColor,
    borderTopWidth:2
  },
  strikeOut: {
    textDecorationLine: 'line-through'
  },
  noBorderRight:{
    borderRightWidth: 0,
  }
});