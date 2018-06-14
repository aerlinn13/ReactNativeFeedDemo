import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Styles from '../../styles/globalStyles';
import Listings from '../listings';
import PerkDetails from '../perkDetails';
import UnImplemented from '../unImplemented';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const BrowseStack = createStackNavigator({
  listings: {
    screen: Listings,
    navigationOptions : ({ navigation }) => ({
      title: "BROWSE",
      headerTitleStyle:Styles.navBarHeaderTitleStyle,
      headerBackTitle: null,
    })
  },
  perkDetails:{
    screen:PerkDetails, 
    mode:'screen',  
    headerMode:'none',
    navigationOptions : ({ navigation }) => ({
      title: "BROWSE",
      headerBackTitle: null,
    })
  }
},
{
  navigationOptions: {
    headerStyle: Styles.navBarHeaderStyle,
  }
});

export const Tabs = createBottomTabNavigator({
    browse: {
      screen: BrowseStack,
      navigationOptions: {
        tabBarLabel: 'BROWSE',
        tabBarIcon: ({ tintColor }) => <FontAwesome name="home" size={26} color={tintColor} />,
      },
    },
    photo: {
      screen: PerkDetails,
      navigationOptions: {
        tabBarLabel: 'POSTS',
        tabBarIcon: ({ tintColor }) => <FontAwesome name="camera" size={22} color={tintColor} />
      },
    },
    favourites: {
      screen: UnImplemented,
      navigationOptions: {
        tabBarLabel: 'FAVOURITES',
        tabBarIcon: ({ tintColor }) => <FontAwesome name="heart-o" size={26} color={tintColor} />
      },
    },
    redeemed: {
      screen: UnImplemented,
      navigationOptions: {
        tabBarLabel: 'REDEEMED',
        tabBarIcon: ({ tintColor }) => <FontAwesome name="gift" size={26} color={tintColor} />
      },
    },
    profile: {
      screen: UnImplemented,
      navigationOptions: {
        tabBarLabel: 'PROFILE',
        tabBarIcon: ({ tintColor }) => <FontAwesome name="user-circle-o" size={26} color={tintColor} />
      },
    }
  },
  {
    animationEnabled:false,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor:'#000000'
      },
      activeTintColor: '#fff',
      labelStyle: {
        fontSize: 8.5
      },
      showLabel:true,
      showIcon:true
    }
});