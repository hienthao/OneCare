import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  FlatList,
  Image,
  Text,
  RefreshControl,
} from 'react-native';
import {
  Icon,
  Button,
  Divider,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

const OpenCourseDetailButton = ({url, children}) => {
  return (
    <TouchableOpacity>
      <Text style={styles.titleName}>{children}</Text>
    </TouchableOpacity>
  );
};

export const CourseScreen = ({route, navigation}) => {
  const [courseList, setcourseList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isError, setIsError] = useState(false);

  const renderItem = ({item, index}) => (
    <View style={styles.courseView}>
      <Image
        source={{
          uri: item.urlToImage
            ? item.urlToImage
            : 'https://jortour.com/wp-content/uploads/2018/08/ph_product.jpg',
        }}
        style={{width: 150, height: 150}}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={styles.titleView}>
        <OpenCourseDetailButton
          url={item.url ? item.url : 'https;//google.com.vn'}
          children={item.title}></OpenCourseDetailButton>
        <Text style={styles.publishAt}>{item.publishedAt}</Text>
      </View>
    </View>
  );

  const onRefresh = async () => {
    setIsRefreshing(true);
    setPage(1);
    try {
      const reponse = await fetch(`http://localhost:3000/courseData`);
      const jsonData = await reponse.json();
      setcourseList(jsonData);
      setIsRefreshing(false);
    } catch (error) {
      setIsRefreshing(false);
    }
  };

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const reponse = await fetch(`http://localhost:3000/courseData`);
      const jsonData = await reponse.json();
      setcourseList((prevArticles) => prevArticles.concat(jsonData));
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  const handleLoadMore = () => {
    if (!isLoading) {
      setPage((prevPage) => ++prevPage);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isError ? <Text>Error</Text> : null}
      {isLoading ? <ActivityIndicator /> : null}
      <FlatList
        ItemSeparatorComponent={
          Platform.OS !== 'android' &&
          (({highlighted}) => (
            <View style={[styles.separator, highlighted && {marginLeft: 0}]} />
          ))
        }
        data={courseList}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        enableEmptySections={true}
        style={styles.flatListView}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.4}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  courseView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  separator: {
    height: 1,
    borderWidth: 1,
    borderColor: '#2089DC',
  },

  titleView: {
    margin: 5,
    flex: 1,
    justifyContent: 'space-between',
  },
  titleName: {
    color: 'black',
    textAlign: 'left',
    fontSize: 20,
  },
  textDivider: {
    width: '100%',
  },
  publishAt: {
    color: 'grey',
    fontSize: 12,
  },
  flatListView: {
    margin: 10,
  },
});
