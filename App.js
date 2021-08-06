import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import WriteStoryScreen from '.screens/WriteStoryScreen';
import ReadStoryScreen from '.screens/ReadStoryScreen';

export default class App extends React.Component {
  render(){
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: WriteStoryScreen,
  ReadStory: ReadStoryScreen
})

const AppContainer = createAppContainer(TabNavigator)