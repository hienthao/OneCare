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

export function CatogorySearch({
  title = 'TITLE',
  icon = 'star',
  searchID = '0',
  navigation,
}) {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate('NewsDetail', {
            searchID: {searchID},
            otherParam: 'anything you want here',
          });
        }}>
        <Icon style={styles.icon} fill="#FE9E02" name={icon} />
        <Text>{title}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    margin: 10,
  },
  icon: {
    width: 32,
    height: 32,
  },
});
