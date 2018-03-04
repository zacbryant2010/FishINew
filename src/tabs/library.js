import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';

import LibraryHome from '../views/Library/Library_home';
import LibraryDetails from '../views/Library/Library_Detail';

const LibraryTabView = ({ navigation }) => (
  <LibraryHome banner="Library" navigation={navigation} />
);

const LibraryDetailTabView = ({ navigation }) => (
  <LibraryDetails banner="Library Detail" navigation={navigation} />
);

const LibraryTab = StackNavigator({
  Home: {
    screen: LibraryTabView,
    path: '/',
    navigationOptions: () => ({
      title: 'Library',
        header: null,
    }),
  },
  Library_Detail: {
    screen: LibraryDetailTabView,
    path: 'Library_Detail',
    navigationOptions: {
      title: 'Library Detail',
    },
  },
});

export default LibraryTab;
