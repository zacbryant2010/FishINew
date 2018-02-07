
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';

import FeedHome from '../views/feed/feed_home';
import FeedDetails from '../views/feed/feed_detail';

const FeedTabView = ({ navigation }) => (
  <FeedHome banner="Feed" navigation={navigation} />
);

const FeedDetailTabView = ({ navigation }) => (
  <FeedDetails banner="Feed Detail" navigation={navigation} />
);

const FeedTab = StackNavigator({
  Home: {
    screen: FeedTabView,
    path: '/',
    navigationOptions: () => ({
      title: 'Feed',
        header: null,
    }),
  },
  Feed_Detail: {
    screen: FeedDetailTabView,
    path: 'feed_detail',
    navigationOptions: {
      title: 'Feed Detail',
    },
  },
});

export default FeedTab;
