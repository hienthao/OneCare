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

export function NavigationView({status}) {
  return (
    <View style={styles.container}>
      <Text>Hello NavigationView</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
});
