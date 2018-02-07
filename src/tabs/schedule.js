import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';

import ScheduleHome from '../views/schedule/schedule_home';
import ScheduleDetails from '../views/schedule/schedule_detail';

const ScheduleTabView = ({ navigation }) => (
  <ScheduleHome banner="Schedule" navigation={navigation} />
);

const ScheduleDetailTabView = ({ navigation }) => (
  <ScheduleDetails banner="Schedule Detail" navigation={navigation} />
);

const ScheduleTab = StackNavigator({
  Home: {
    screen: ScheduleTabView,
    path: '/',
    navigationOptions: () => ({
      title: 'Schedule',
        header: null,
    }),
  },
  Schedule_Detail: {
    screen: ScheduleDetailTabView,
    path: 'Schedule_detail',
    navigationOptions: {
      title: 'Schedule Detail',
    },
  },
});

export default ScheduleTab;
