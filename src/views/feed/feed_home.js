import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableHighlight,
  ListView,
} from 'react-native';
import colors from 'HSColors';
import {
  Text,
  Card,
  ButtonGroup,
  Tile,
  Icon,
  List,
  ListItem,
  Avatar
} from 'react-native-elements';

import socialColors from 'HSSocialColors';





class Icons extends Component {
  constructor() {
      super();

  }

  renderRow(rowData, sectionID) {
    return (
      <ListItem
        key={sectionID}
        title={rowData.title}
      />
    );
  }

  render() {
    const { navigation } = this.props;
    const buttons = ['Button1', 'Button2'];

    return (
      <ScrollView>
        <View style={styles.hero} backgroundColor={socialColors.quora}>
          <Icon color="white" name="home" size={62} type="font-awesome" />
          <Text style={styles.heading}>Home</Text>
        </View>
        
        <Card
        title='FishI SA'
        >
      <Text style={{marginBottom: 10}}>
      FishI SA developed by Zac Bryant
      </Text>
      <Text style={{marginBottom: 10}}>
      Currently phase 2 in development featuring image recognition capabilities, future AU library incoming      </Text>
      <Text style={{marginBottom: 10}}>
      Enquiries or issues email zac.bryant15@gmail.com      
      </Text>
      </Card>
        

        
       
            
         
        
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.secondary,
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
    hero: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        backgroundColor: colors.primary2,
    },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
  },
});
export default Icons;
