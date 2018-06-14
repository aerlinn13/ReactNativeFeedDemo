import React from 'react';
import { GetListings } from '../clients/apiClient';
import Loading  from '../components/loading';
import Card from '../components/card';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  StatusBar,
} from 'react-native';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

export default class Listings extends React.PureComponent {

  constructor(props) {
    super(props);

    this._favourited = this._favourited.bind(this);
    this._navigateToPerkDetails = this._navigateToPerkDetails.bind(this);
    this._renderItem = this._renderItem.bind(this);

    this.state = {
      loading: true,
      data: [],
      error: null
    };  
  }

  async componentDidMount(){

    const listings = await GetListings();

    if(listings.status === 'success') {
      this.setState(
        {
          loading:false,
          data:listings.data
        }
      );
    }
    else {
      //todo make error message
      console.log("failed to load");
    }
  }

  _navigateToPerkDetails(subTitle){
    this.props.navigation.navigate("perkDetails", {subTitle:subTitle});
  }

  _favourited(index, isFavourited){
    let data = [ ...this.state.data ];
    data[index] = {...data[index], is_favourited: isFavourited === 1 ? 0 : 1};
    this.setState({ data });
  }

  _renderItem({item, index}) {

      item.index = index;
      item.onPressItem = this._favourited;
      item.navigateToPerkDetails = this._navigateToPerkDetails;

      return <Card {...item}  />;
  }

  render() {
    
    if(this.state.loading){
      return <Loading />;
    }
    else {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content"/>
          <FlatList
            data={this.state.data}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
            extraData={this.state}
          />
        </View>
       );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#454545'
  },
});
