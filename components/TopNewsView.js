import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';

import Swiper from 'react-native-swiper';
const {width} = Dimensions.get('window');

import {newsData} from '../mockupdata/news.data';

export function TopNewsView({status}) {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        //height={260}
        autoplay
        autoplayTimeout={3.5}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        paginationStyle={styles.paginationStyle}
        loop>
        {newsData.map((news) => (
          <View key={news.id} style={styles.slide}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={news.urlToImage}
            />
            <View style={styles.title}>
              <Text style={styles.text} numberOfLines={2}>
                {news.title}
              </Text>
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 260,
    
  },

  wrapper: {
  },

  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 5,
    height: 5,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: '#000',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  paginationStyle: {
    bottom: 5,
    left: null,
    right: 10,
  },
  slide: {
    flex: 1,
    borderRadius: 40,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    top: 210,
    height: 50,
    width,
    padding: 5,
  },

  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'normal',
  },

  image: {
    width,    
 
    flex: 1,
  },
});
