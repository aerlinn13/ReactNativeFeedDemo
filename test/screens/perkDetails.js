import React from 'react';
import { GetListings } from '../clients/apiClient';
import normalize from "react-native-elements/src/helpers/normalizeText";
import { FontColor, TitleFontColor, MainBgColor, Font } from '../styles/globalStyles';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import InfoList from '../components/infoList';
import Loading  from '../components/loading';
import DetailsHeadingText from '../components/detailsHeadingText';
import OpeningTimesListItem from '../components/openingTimesListItem';
import { GetListing } from '../clients/apiClient';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
  Platform,
  TouchableOpacity,
  FlatList
} from 'react-native';

const dimensions = Dimensions.get('window');
const windowWidth = dimensions.width;
const imageHeight = Math.round(dimensions.width * 9 / 16);

export default class PerkDetails extends React.PureComponent {

  static navigationOptions = { header: null};

  constructor(props) {
    super(props);

    this._renderItem = this._renderItem.bind(this);
    this._selectOpeningTime = this._selectOpeningTime.bind(this);

    this.state = {
      loading: true,
      data: [],
      openingTimesDataLength:0,
      openingTimesData:[]
    };  

  }

  async componentDidMount(){

    const listing = await GetListing();

    if(listing.status === 'success') {
      this.setState(
        {
          loading:false,
          openingTimesDataLength : listing.data.open_hours.length -1,
          openingTimesData:listing.data.open_hours,
          data:listing.data
        }
      );
      this._selectOpeningTime(0);
    }
    else {
      console.log("failed to load");
    }
  }

  _favourite = () => {

    return (
       <TouchableOpacity style={[styles.favourite, {top:Platform.OS === 'ios' ? 35 : 10}]}>
            <View>
                <FontAwesome name={"heart"} size={30} color={'white'} />
            </View>
        </TouchableOpacity>
    )
  }

  _back(goBack){
    return (
      <TouchableOpacity onPress={() => goBack()} style={[styles.backIcon, {top:Platform.OS === 'ios' ? 35 : 10}]}>
           <View>
               <Ionicons name={'ios-arrow-back'} size={30} color={'white'} />
           </View>
       </TouchableOpacity>
    )
  }

  _selectOpeningTime(index){

    let newflatListDataWithNoneSelected = this.state.openingTimesData.map(el => (
      {...el, selected: 0, selectedPrevSibling:0}
    ))

    let data = [ ...newflatListDataWithNoneSelected  ];
    data[index] = {...data[index], selected: 1};
    data[index -1] = {...data[index -1], selectedPrevSibling: 1};

    this.setState({ openingTimesData: data });
  }

  _renderItem({item, index}) {

    item.index = index;
    item.lengthOfData = this.state.openingTimesDataLength;
    item.select = this._selectOpeningTime;

    return <OpeningTimesListItem {...item} />
  }
  
  render() {

    const { navigation } = this.props;
    const { goBack } = navigation;

    let headingsData = {
      subTitle:navigation.getParam('subTitle', 'Tuesday 08:00am - 10:30pm'),
      title:this.state.data.title
    };

    if(this.state.loading){
        return <Loading />;
    }
    else {
        return (
          <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <ScrollView style={styles.scrollView}>
              <View>
                  <Image 
                    style={[styles.heroImage, { height: imageHeight,width:windowWidth }]} 
                    source={{ uri:this.state.data.image }} 
                  />
              </View>
              <View>
                {this._back(goBack)}
                {this._favourite()}
              </View>
              <View style={styles.overlayContainer}>
                <Image source={require('../static/imageSlice.png')} style={{width:windowWidth, height:imageHeight / normalize(2)}}></Image>
              </View>
              <View style={styles.infoContainer}>
                <DetailsHeadingText {...headingsData} />
                <InfoList />
                <Text style={styles.subTitle}>OPENING TIMES</Text>
                <FlatList
                  style={styles.flatListContainer}
                  data={this.state.openingTimesData}
                  renderItem={this._renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  horizontal={true}
                  extraData={this.state}
                />
                <Text style={styles.subTitle}>PERK DETAILS</Text>
                <Text style={styles.detailsText}>{this.state.data.description}</Text>
              </View>
            </ScrollView>
          </View>
        );
    }
  }
}

const perkDetailsHorizontalPosition = 40;

const styles = StyleSheet.create({
  container : { 
    flex:1, 
    backgroundColor: MainBgColor 
  },
  scrollView:{ 
    flex:1 
  },
  heroImage:{ 
     position: 'absolute', 
     top:0, 
     left:0 
  },
  backIcon:{
    position:'absolute',
    left:10
  },
  overlayContainer: {
    flex:1, 
    marginTop:95
  },
  infoContainer:{
    backgroundColor:MainBgColor,
  },
  favourite:{
    position:'absolute',
    right:10
  },
  flatListContainer:{
    flex:1,
    paddingBottom:10
  },
  subTitle:{
    color:TitleFontColor,
    fontSize:normalize(14),
    marginLeft:30,
    marginVertical:20,
    fontWeight:'bold'
  },
  detailsText:{
    fontSize:normalize(14),
    marginLeft:perkDetailsHorizontalPosition,
    width: windowWidth - perkDetailsHorizontalPosition*2,
    color:TitleFontColor,
    paddingBottom:50
  }
});
