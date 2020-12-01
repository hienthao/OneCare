import {Icon} from '@ui-kitten/components';
import React from 'react';
import {
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {CatogorySearch} from './CatogorySearch';

export function TopCategoriesView({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <CatogorySearch
          title="Da"
          icon="color-palette"
          searchID="1"
          navigation={navigation}
        />
        <CatogorySearch
          title="Tóc"
          icon="star"
          searchID="1"
          navigation={navigation}
        />
        <CatogorySearch
          title="Massage"
          icon="activity"
          searchID="1"
          navigation={navigation}
        />
      </View>
      <View style={styles.line}>
        <CatogorySearch
          title="Thẩm mỹ"
          icon="droplet"
          searchID="1"
          navigation={navigation}
        />
        <CatogorySearch
          title="Make up"
          icon="eye-off-2"
          searchID="1"
          navigation={navigation}
        />
        <CatogorySearch
          title="Nails"
          icon="brush"
          searchID="1"
          navigation={navigation}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    margin: 10,
  },
  line: {
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  icon: {
    width: 32,
    height: 32,
  },
});
