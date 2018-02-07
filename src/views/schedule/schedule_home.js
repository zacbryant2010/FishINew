import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableHighlight,
  ListView,
} from 'react-native';

import {
  Text,
  Card,
  ButtonGroup,
  Tile,
  Icon,
  List,
  ListItem,
  Avatar,
    Button,
    PricingCard
} from 'react-native-elements';

import colors from 'HSColors';
import socialColors from 'HSSocialColors';

const users = [

];

const log = () => console.log('this is an example method');

const list1 = [

];

const list2 = [

];

class Icons extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      selectedIndex: 0,
      value: 0.5,
      dataSource: ds.cloneWithRows(list1),
    };

    this.updateIndex = this.updateIndex.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  renderRow(rowData, sectionID) {
    return (
      <ListItem
        key={sectionID}
        onPress={log}
        title={rowData.title}
        icon={{ name: rowData.icon }}
      />
    );
  }

  render() {
    const { navigation } = this.props;
    const buttons = ['Button1', 'Button2'];
    const { selectedIndex } = this.state;

    return (
      <ScrollView>




        <View style={styles.container}>
          <View style={styles.hero} backgroundColor={socialColors.quora}>
            <Icon color="white" name="schedule" size={62}  />
            <Text style={styles.heading}>Schedule</Text>
          </View>

          <PricingCard
              color={socialColors.quora}
              title='5JAW'
              info={['Dale Van Heer', 'N007', 'Monday 9:00AM - 11:00AM']}
              button={{ title: 'More Info' }}
          />

          <PricingCard
              color={socialColors.quora}
              title='5SDA'
              info={['Dale Van Heer', 'B747', 'Tuesday 11:30AM - 1:00PM']}
              button={{ title: 'More Info' }}
          />


          <PricingCard
              color={socialColors.quora}
              title='5IOSMD'
              info={['Nadil', 'B787', 'Wednesday 9:00AM - 11:00AM']}
              button={{ title: 'More Info' }}
          />

          <PricingCard
              color={socialColors.quora}
              title='6MITP'
              info={['Kym Bond', 'N006', 'Thursday 2:00PM - 4:00PM']}
              button={{ title: 'More Info' }}
          />





        </View>
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
