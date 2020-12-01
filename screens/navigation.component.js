import React, {useState} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import {HomeScreen} from './home.screen';
import {NewsScreen} from './news.screen';
import {CourseScreen} from './course.screen';
import {NotiScreen} from './notification.screen';
import {ProfileScreen} from './profile.screen';
import {NewsDetailScreen} from './NewsDetailScreen';

const Stack = createBottomTabNavigator();

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;

const BellIcon = (props) => <Icon {...props} name="bell-outline" />;

const NewsIcon = (props) => <Icon {...props} name="browser-outline" />;

const CourseIcon = (props) => <Icon {...props} name="browser-outline" />;

const HomeIcon = (props) => <Icon {...props} name="home-outline" />;

const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Trang chủ" icon={HomeIcon} />
    <BottomNavigationTab title="Tin tức" icon={NewsIcon} />
    <BottomNavigationTab title="Khóa học" icon={CourseIcon} />
    <BottomNavigationTab title="Thông báo" icon={BellIcon} />
    <BottomNavigationTab title="Tài khoản" icon={PersonIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    tabBar={(props) => <BottomTabBar {...props} />}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="News" component={NewsScreen} />
    <Stack.Screen name="Course" component={CourseScreen} />
    <Stack.Screen name="Notification" component={NotiScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
  </Stack.Navigator>
);

export const AppNavigator = () => {
  return <TabNavigator />;
};
