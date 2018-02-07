import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';

import EventHome from '../views/event/event_home';
import EventDetails from '../views/event/event_detail';

const EventTabView = ({ navigation }) => (
  <EventHome banner="Event" navigation={navigation} />
);

const EventDetailTabView = ({ navigation }) => (
  <EventDetails banner="Event Detail" navigation={navigation} />
);

const EventTab = StackNavigator({
  Home: {
    screen: EventTabView,
    path: '/',
    navigationOptions: () => ({
      title: 'Event',
        header: null,
    }),
  },
  Event_Detail: {
    screen: EventDetailTabView,
    path: 'Event_detail',
    navigationOptions: {
      title: 'Event Detail',
    },
  },
});

export default EventTab;
