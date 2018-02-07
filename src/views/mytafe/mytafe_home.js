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

  learnNavigate() {
    const { navigation } = this.props;
    if (Platform.OS == 'android') {
    navigation.navigate('Learn_Manage')
    }
    if (Platform.OS == 'ios') {
      Browser.open('https://learn.tafesa.edu.au', {
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

  mytafeNavigate() {
    const { navigation } = this.props;
    if (Platform.OS == 'android') {
    navigation.navigate('MyTAFE_Manage')
    }
    if (Platform.OS == 'ios') {
      Browser.open('https://sts.tafesa.edu.au/adfs/ls?SAMLRequest=nZNBj5swEIXv%2FRWW70CgG7W1Aqs00aqRti1K2D3szWuGxYmxqcdk039fQ5IWVc0q6oGLmXlv%2FL3x7PbQKLIHi9LolMbhhBLQwpRSv6T0obgLPtLb7N0MeaNaNu9crdfwowN0ZI4I1vm2hdHYNWA3YPdSwMP6PqW1cy2yKAKJoeMVIA%2Bh7ELeRcI0jdHcK1Gy9DpSczd4n1vQ%2Fd3CywojhZTcGStgGCKlFVcIlKyWKW23agcvSsp61woQ%2FtuW5a7lUm6fa6V1LSrZlo3w1ZhzRLmHP%2F2IHaw0Oq5dSpNJ%2FCGI4yBJinjKplN28ymMb94%2FUZJb44ww6rPURzad1cxwlMg0bwCZE2wz%2F3rPknDCno9FyL4URR7k3zcFJY9nxknP2FPXyAaqb0u1J1%2BanTIYBrbXC%2FBzTDS7HEqvg2hm0djj6Ji07JsXXS1zo6T4SeZKmdeFBe48RGc7GGJpuLs8RhzGw4ksg2ooZZ3GFoSsJJRjFsm1MKLfs522EcphLfwqOjg4sjBNy63EnjccuHD%2F5XIyYWPphfJA11CN9a4O4M0ywUSv7Y%2F7HX01tux3DoS%2FW2G5B2asOwb074my088LTLJzuONHnP0C&RelayState=275a3d28-f5e6-4c93-bd1a-9b46764811dd&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256&Signature=c4ie8OlUjc2YjHZWI6K4wrU9x6xFQwdfKlgzpHHFdI4ojQjhzLIN26khDmmWsAcwBeTkhNZLDCeulGLG2c6VLvaLjWoTqpYqiTaA%2BSdaeGy%2FxxBQ8MXEZ7CF%2FJl2Pn8IScgw6xyxp6FzNVpxKdxACJLFbLfXyOB7MqLTVhYfJkC7R0AwJ1zo1eeLen691%2Buk4MKsnzcaNsVE5gMI%2FLYVPgYrsVgztl0iT8YEDlI9zqendRh%2FjavTthRGWki4TaG3p1C8Is0sZ432YbjsS65TlvA5%2FUbHKK6MJz5UDtJcwp23zMXjyo8v1tOyrCUdiH19UTgWLaUjpMb0PGunyNYbsQ%3D%3D', {
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
    O365Navigate() {
        const { navigation } = this.props;
            navigation.navigate('O365_Menu')
    }

  
  render() {

    return (
      <View>
        <View style={styles.hero} backgroundColor={socialColors.quora}>
          <Icon color="white" name="graduation-cap" size={62} type="entypo" />
          <Text style={styles.heading}>MyTAFE</Text>
        </View>

       
        <Button
          buttonStyle={styles.button}
          backgroundColor={socialColors.quora}
          onPress={() =>
            this.learnNavigate()}
          title="Learn"
        />
        <Button
          buttonStyle={styles.button}
          backgroundColor={socialColors.quora}
          onPress={() =>
              this.O365Navigate()}
          title="Office 365"
        />
        <Button
          buttonStyle={styles.button}
          backgroundColor={socialColors.quora}
          onPress={() =>
            this.mytafeNavigate()}
          title="Manage My Account"
        />
        <Button
          buttonStyle={styles.button}
          backgroundColor={socialColors.quora}
          onPress={() => log()}
          title="Settings"
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
