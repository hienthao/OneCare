import {
  Icon,
  Button,
  TopNavigation,
  TopNavigationAction,
  Divider,
} from '@ui-kitten/components';
import React, {useState, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export function NewsDetailScreen({route, navigation}) {
  const {searchID, otherParam} = route.params;
  const [isError, setIsError] = useState(false);
  const [newsDetail, setnewsDetail] = useState([]);

  const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

  const BackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => navigation.navigate('News')}
    />
  );
  const fetchData = async () => {
    setIsError(false);
    try {
      const reponse = await fetch(`http://localhost:3000/newsData/${searchID}`);
      const jsonData = await reponse.json();
      setnewsDetail(jsonData);
      console.log(jsonData);
      console.log(`http://localhost:3000/newsData/${searchID}`);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchID]);

  return (
    <SafeAreaView>
      <TopNavigation accessoryLeft={BackAction} title="Tin tuc" />
      <Divider />
      {isError ? <Text>Error</Text> : null}
      <Image
        style={styles.mainImage}
        source={{
          uri: newsDetail.urlToImage,
        }}
      />
      <View style={styles.textView}>
        <Text style={styles.publishedAt}>{newsDetail.publishedAt}</Text>
        <Text style={styles.title}>{newsDetail.title}</Text>
        <Text style={styles.content}>{newsDetail.content}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    margin: 10,
  },
  mainImage: {
    width: '100%',
    height: 300,
    alignContent: 'center',
  },
  publishedAt: {
    marginBottom: 10,
    color: 'grey',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    fontWeight: '400',
  },
});
