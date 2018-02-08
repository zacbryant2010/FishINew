import React from 'react';
import { View, Image, Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import FeedTab from './src/tabs/feed';
import ScheduleTab from './src/tabs/schedule';
import EventTab from './src/tabs/event';
import MyTAFETab from './src/tabs/mytafe';

import socialColors from 'HSSocialColors';

const MainNavigator = TabNavigator(
    {
        FeedTab: {
            screen: FeedTab,
            path: '/feed',

            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name='home'
                        size={25}
                        type="font-awesome"
                        color={tintColor}
                    />
                ),

            },

        },
       
        EventTab: {
            screen: EventTab,
            path: '/event',
            navigationOptions: {
                tabBarLabel: 'Search',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name="home"
                        size={25}
                        color={tintColor}
                    />
                ),
            },
        },
       
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: true,
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            activeTintColor: '#AA2200',
            inactiveTintColor: '#999999',
            style: {
                backgroundColor: '#ffffff',
            },
            indicatorStyle: {
                backgroundColor: 'white'
            },
        }
    }
);

export default MainNavigator;
