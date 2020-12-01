import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

export const DetailsScreen = ({navigation}) => {
  const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

  const BackAction = () => <TopNavigationAction icon={BackIcon} />;

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation accessoryLeft={BackAction} title="Home" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">DETAILS</Text>
      </Layout>
    </SafeAreaView>
  );
};
