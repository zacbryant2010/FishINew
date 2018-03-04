
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';

import HomeHome from '../views/Home/home_home';
import HomeDetails from '../views/Home/home_detail';

const HomeTabView = ({ navigation }) => (
  <HomeHome banner="Home" navigation={navigation} />
);

const HomeDetailTabView = ({ navigation }) => (
  <HomeDetails banner="Home Detail" navigation={navigation} />
);

const HomeTab = StackNavigator({
  Home: {
    screen: HomeTabView,
    path: '/',
    navigationOptions: () => ({
      title: 'Home',
        header: null,
    }),
  },
  Home_Detail: {
    screen: HomeDetailTabView,
    path: 'home_detail',
    navigationOptions: {
      title: 'Home Detail',
    },
  },
});

export default HomeTab;
