import React from 'react';
import { Tabs } from './screens/config/router';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends React.PureComponent {
  render() {
    return <Tabs />;
  }
}
