
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import MyTAFEHome from '../views/mytafe/mytafe_home';
import MyTAFE_Manage from '../views/mytafe/mytafe_manage';
import Learn_Manage from '../views/mytafe/learn_manage';
import O365_Menu from '../views/mytafe/365_menu';



const MyTAFEHomeTabView = ({ navigation }) => (
  <MyTAFEHome navigation={navigation} />
);

const MyTAFE_ManageTabView = ({ navigation }) => (
  <MyTAFE_Manage navigation={navigation} />
);

const Learn_ManageTabView = ({ navigation }) => (
  <Learn_Manage navigation={navigation} />
);

const O365_MenuTabView = ({ navigation }) => (
    <O365_Menu navigation={navigation} />
);


const ButtonsTab = StackNavigator({
  Buttons: {
    screen: MyTAFEHomeTabView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      title: 'MyTAFE',
        header: null,
    }),
  },
  MyTAFE_Manage: {
    screen: MyTAFE_ManageTabView,
    path: '/mytafe_manage',
    navigationOptions: {
      tabBarVisible: false,
      title: 'MyTAFE',

    },

  },
  Learn_Manage: {
    screen: Learn_ManageTabView,
    path: '/learn_manage',
    navigationOptions: {
      tabBarVisible: false,
      title: 'Learn',

    },

  },
    O365_Menu: {
        screen: O365_MenuTabView,
        path: '/365_menu',
        navigationOptions: {
            tabBarVisible: false,
            title: 'Office 365',

        },

    },
});

export default ButtonsTab;
