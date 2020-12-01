import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Divider, Layout, TopNavigation, Text} from '@ui-kitten/components';

export const ProfileScreen = ({navigation}) => {
  const navigateDetails = () => {
    navigation.navigate('Profile');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Profile</Text>
      {/* <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout> */}
    </SafeAreaView>
  );
};
