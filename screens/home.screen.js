import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  TopNavigationAction,
  Icon,
  Text,
} from '@ui-kitten/components';

import {TopNewsView} from '../components/TopNewsView';
import {TopCategoriesView} from '../components/TopCategoriesView';
import {TopLookingView} from '../components/TopLookingView';
import {HotEventsView} from '../components/HotEventsView';
import {NavigationView} from '../components/NavigationView';
import {ScrollView} from 'react-native-gesture-handler';

export const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TopNewsView style={styles.topNewViews} />
        <TopCategoriesView
          navigation={navigation}
          style={styles.topCategoriesView}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNewViews: {
    height: 300,
    borderRadius: 40,
    margin: 10,
  },
  topCategoriesView: {
    height: 300,
    borderRadius: 40,
    margin: 10,
  },
});
