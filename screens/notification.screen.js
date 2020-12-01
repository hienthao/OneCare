import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Divider, Layout, TopNavigation, Text} from '@ui-kitten/components';

export const NotiScreen = ({navigation}) => {
  const navigateDetails = () => {
    navigation.navigate('Notifications');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Notifications</Text>
      {/* <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout> */}
    </SafeAreaView>
  );
};
