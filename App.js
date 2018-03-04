import React from 'react';
import { View, Image, Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import  HomeTab from './src/tabs/home';

import LibraryTab from './src/tabs/library';


import socialColors from 'HSSocialColors';

const MainNavigator = TabNavigator(
    {
        FeedTab: {
            screen: HomeTab,
            path: '/home',

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


       
        LibraryTab: {
            screen: LibraryTab,
            path: '/library',
            navigationOptions: {
                tabBarLabel: 'Search',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name="search"
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
