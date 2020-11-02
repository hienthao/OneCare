/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {TopNewsView} from './components/TopNewsView';
import {TopCategoriesView} from './components/TopCategoriesView';
import {TopLookingView} from './components/TopLookingView';
import {HotEventsView} from './components/HotEventsView';
import {NavigationView} from './components/NavigationView';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.containerView}>
        <View style={styles.topNewsView}>
          <TopNewsView />
        </View>
        <View style={styles.topCategoriesView}>
          <TopCategoriesView />
        </View>
        <View style={styles.topLookingView}>
          <TopLookingView />
        </View>
        <View style={styles.hotEventsView}>
          <HotEventsView />
        </View>
        <View style={styles.navigationView}>
          <NavigationView />
        </View>
      </SafeAreaView>
    </>
  );
};

const backgroundColor = '#fff';

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: backgroundColor,
  },
  topNewsView: {},
  topCategoriesView: {},
  topLookingView: {},
  hotEventsView: {},
  navigationView: {},
});

export default App;
