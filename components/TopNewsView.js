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

export function TopNewsView({status}) {
  return (
    <View style={styles.container}>
      <Text>Hello TopLookingViews</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
});
