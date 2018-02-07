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



const list1 = [
  {
    name: '6MITP - Kym Bond',
    subtitle: 'Today 2:00PM N008',
  },
  {
    name: '4C#M - Dale Van Heer',
    subtitle: 'Today 4:30PM N007',
  },
  {
    name: '4SDB - KT Lau',
    subtitle: 'Today 6:30PM NOO7',
  },

];

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
          <Icon color="white" name="feed" size={62} type="font-awesome" />
          <Text style={styles.heading}>Feed</Text>
        </View>
        
        <List>
          {
            list1.map((l, i) => (
              <ListItem
                key={i}
                title={l.name}
                subtitle={l.subtitle}
              />
            ))
          }
        </List>
        

        
       
            
         
        
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
