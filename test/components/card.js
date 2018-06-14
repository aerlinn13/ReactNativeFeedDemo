import React from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import normalize from "react-native-elements/src/helpers/normalizeText";
import { FontColor, TitleFontColor, MainBgColor, Font, HighlightContentColor } from '../styles/globalStyles';

import { 
    View, 
    Text, 
    StyleSheet, 
    Image,
    TouchableOpacity
} from 'react-native';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Class RCTCxxModule','Module RCTImageLoader requires']);
//supressed warning that needs further investigation 

export default class Card extends React.PureComponent {

    constructor(props) {
        super(props); 
    }

    _favourite = (props) => {

        let iconType;
        props.is_favourited === 1 ? iconType = "heart" : iconType = "heart-o";

        return (
           <TouchableOpacity onPress={() => props.onPressItem(props.index, props.is_favourited)} style={styles.favourite}>
                <View>
                    <FontAwesome name={iconType} size={30} color={'white'} />
                </View>
            </TouchableOpacity>
        )
    }

    _directions = (props) => {
        if(props.type == 'offer'){
            return (
                <View style={styles.offerContainer}>
                    <MaterialIcons name="directions-walk" size={26} color={'white'} />
                    <Text style={styles.walkingTime}>{props.offer.location.walking_time}</Text>
                </View>
            )
        }
        else {
            return null;
        }
    }

    render(){
        return (
            <View style={styles.cardContainer}>
                <View>
                    <Image borderRadius={10} style={styles.featureImage} source={{uri:this.props.image}}></Image>
                    {this._favourite(this.props)}
                </View>
                <View style={styles.contentContainer}>
                    <TouchableOpacity style={styles.perk} onPress={() => this.props.navigateToPerkDetails(this.props.subtitle)}>
                        <Text style={styles.perkText}>PERK</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.subtitle}>{this.props.subtitle}</Text>
                    {this._directions(this.props)}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        flex:1, 
        padding:10,
        paddingBottom:5
    },
    featureImage: { 
        height:200
    },
    contentContainer: {
        backgroundColor:MainBgColor, 
        padding:20, 
        paddingBottom:30, 
        borderBottomLeftRadius:10, 
        borderBottomRightRadius:10,
        marginTop:-10
    },
    title:{
        fontFamily:Font, 
        fontSize:normalize(18), 
        color:TitleFontColor, 
        fontWeight:'bold',
        marginTop:15
    },
    subtitle:{
        fontFamily:Font, 
        fontSize:normalize(13), 
        color:FontColor, 
        marginTop:5
    },
    favourite:{
        position:'absolute', 
        top:30, 
        right:30
    },
    walkingTime:{
        fontFamily:Font, 
        fontSize:normalize(13), 
        color:FontColor, 
        marginLeft:10, 
        marginTop:5
    },
    offerContainer:{
        flexDirection:"row", 
        marginTop:20
    },
    perk:{
        position:'absolute', 
        right:10, 
        top:10, 
        paddingHorizontal:20, 
        paddingVertical:5, 
        borderWidth:1, 
        borderColor:HighlightContentColor, 
        
    },
    perkText: {
        color:FontColor, 
        fontSize:normalize(8)
    }
});