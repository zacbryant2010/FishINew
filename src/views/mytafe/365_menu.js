import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform, processColor  } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';

import {
    registerCustomIconType,
    Text,
    Button,
    Icon,
    SocialIcon,
    Card
} from 'react-native-elements';

import colors from 'HSColors';
import socialColors from 'HSSocialColors';
import fonts from 'HSFonts';
import fontelloConfig from '../../../assets/fontello/config.json';
var Browser = require('react-native-browser');


const log = () => {
    console.log('Attach a method here.');
};

class Buttons extends Component {

    constructor() {
        super();

    }

    componentDidMount() {

    }

    outlookNavigate() {
        const { navigation } = this.props;
        if (Platform.OS == 'android') {
            navigation.navigate('Learn_Manage')
        }
        if (Platform.OS == 'ios') {
            Browser.open('https://outlook.com/tafesa.edu.au', {
                showUrlWhileLoading: true,
                loadingBarTintColor: processColor('#d64bbd'),
                navigationButtonsHidden: false,
                showActionButton: true,
                showDoneButton: true,
                doneButtonTitle: 'Done',
                showPageTitles: true,
                disableContextualPopupMenu: true,
                hideWebViewBoundaries: false,
                buttonTintColor: processColor('#d64bbd')
            });

        }
    }

    plannerNavigate() {
        const { navigation } = this.props;
        if (Platform.OS == 'android') {
            navigation.navigate('MyTAFE_Manage')
        }
        if (Platform.OS == 'ios') {
            Browser.open('https://outlook.com/tafesa.edu.au', {
                showUrlWhileLoading: false,
                loadingBarTintColor: processColor('#d64bbd'),
                navigationButtonsHidden: false,
                showActionButton: true,
                showDoneButton: true,
                doneButtonTitle: 'Done',
                showPageTitles: true,
                disableContextualPopupMenu: true,
                hideWebViewBoundaries: false,
                buttonTintColor: processColor('#d64bbd')
            });

        }
    }

    onedriveNavigate() {
        const { navigation } = this.props;
        if (Platform.OS == 'android') {
            navigation.navigate('MyTAFE_Manage')
        }
        if (Platform.OS == 'ios') {
            Browser.open('https://outlook.com/tafesa.edu.au', {
                showUrlWhileLoading: false,
                loadingBarTintColor: processColor('#d64bbd'),
                navigationButtonsHidden: false,
                showActionButton: true,
                showDoneButton: true,
                doneButtonTitle: 'Done',
                showPageTitles: true,
                disableContextualPopupMenu: true,
                hideWebViewBoundaries: false,
                buttonTintColor: processColor('#d64bbd')
            });

        }
    }

    onenoteNavigate() {
        const { navigation } = this.props;
        if (Platform.OS == 'android') {
            navigation.navigate('MyTAFE_Manage')
        }
        if (Platform.OS == 'ios') {
            Browser.open('https://outlook.com/tafesa.edu.au', {
                showUrlWhileLoading: false,
                loadingBarTintColor: processColor('#d64bbd'),
                navigationButtonsHidden: false,
                showActionButton: true,
                showDoneButton: true,
                doneButtonTitle: 'Done',
                showPageTitles: true,
                disableContextualPopupMenu: true,
                hideWebViewBoundaries: false,
                buttonTintColor: processColor('#d64bbd')
            });

        }
    }

    O365Navigate() {
        const { navigation } = this.props;
        navigation.navigate('O365_Menu')
    }


    render() {

        return (
            <View>
                <View style={styles.hero} backgroundColor={socialColors.quora}>
                    <Icon color="white" name="archive" size={62} type="entypo" />

                    <Text style={styles.heading}>Office 365</Text>
                </View>


                <Button
                    buttonStyle={styles.button}
                    backgroundColor={socialColors.quora}
                    onPress={() =>
                        this.outlookNavigate()}
                    title="Outlook"
                />
                <Button
                    buttonStyle={styles.button}
                    backgroundColor={socialColors.quora}
                    onPress={() =>
                        this.plannerNavigate()}
                    title="Planner"
                />
                <Button
                    buttonStyle={styles.button}
                    backgroundColor={socialColors.quora}
                    onPress={() =>
                        this.onedriveNavigate()}
                    title="OneDrive"
                />
                <Button
                    buttonStyle={styles.button}
                    backgroundColor={socialColors.quora}
                    onPress={() =>
                        this.onenoteNavigate()}
                    title="OneNote"
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    heading: {
        color: 'white',
        marginTop: 10,
        fontSize: 22,
    },
    hero: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        backgroundColor: colors.primary2,
    },
    titleContainer: {},
    button: {
        marginTop: 15,
    },
    title: {
        textAlign: 'center',
        color: colors.grey2,
        ...Platform.select({
            ios: {
                fontFamily: fonts.ios.black,
            },
        }),
    },

});

export default Buttons;
