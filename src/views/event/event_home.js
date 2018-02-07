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
    Button
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
                  <Icon color="white" name="event" size={62}  />
                  <Text style={styles.heading}>SA Fish</Text>
                </View>
                <Card

                    title='Albacore'
                    image={require('../images/albacore.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  No minimum size
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: 2 
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people on board: 
                  </Text>
                  
                </Card>

                <Card
                    title='Australian Herring - Tommy Ruff'
                    image={require('../images/tommy.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  No minimum size
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: 40
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people on board: 120
                  </Text>
                  
                </Card>

                <Card
                    title='Blue Morwong - Queen Snapper'
                    image={require('../images/QueenSnapper.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  Minimum size: 38 cm measured from tip of snout to tip of tail
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: 5
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people on board: 15                 
                   </Text>
                  
                </Card>
                <Card
                    title='Blue Crab'
                    image={require('../images/bluecrab.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  Minimum size: 11 cm measured across the carapace from the base of the largest spines 
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: 20 - combined limit with Sand Crabs
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people on board: 60 - combined limit with Sand Crabs
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Restrictions: Females with external eggs are totally protected and must be returned to the water immediately.         
                  </Text>
                  
                  
                </Card>
                <Card
                    title='Bream'
                    image={require('../images/Bream.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  Minimum size: 30 cm from tip of snout to tip of tail
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: 10
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people on board: 30                
                  </Text>
                </Card>

                <Card
                    title='Catfish - Hyrtls/Silver Tandan'
                    image={require('../images/catfishtandan.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  No minimum size                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: 10
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people on board: 30                
                  </Text>
                </Card>
                <Card
                    title='Congolli'
                    image={require('../images/congolli.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  No minimum size                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: 2
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people on board: 6                
                  </Text>
                </Card>
                <Card
                    title='Cuttlefish'
                    image={require('../images/cuttlefish.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  No minimum size                 
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: Either 15 Cuttlefish or a combined total of 15 Squid and Cuttlefish
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people on board: Either 45 Cuttlefish or a combined total of 45 Cuttlefish and Squid                
                  </Text>
                </Card>
                <Card
                    title='Flathead'
                    image={require('../images/flathead.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  Minimum size: 30 cm measured from the tip of snout to tip of tail
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: 10
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people on board: 30               
                  </Text>
                </Card>
                <Card
                    title='Flounder'
                    image={require('../images/flounder.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  No Size Limits
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: 20
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people on board: 60               
                  </Text>
                </Card>
                <Card
                    title='Giant Crab'
                    image={require('../images/giantcrab.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  Minimum size: 15 cm measured from the top to bottom of the carapace.
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  No bag or boat limit.
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Restrictions: Females with external eggs are totally protected and must be returned to the water immediately.
                  </Text>
                </Card>
                <Card
                    title='Golden Perch'
                    image={require('../images/goldenperch.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  Minimum size: 33 cm from tip of snout to tip of tail.
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: 5
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people on board: 15
                  </Text>
                </Card>
                <Card
                    title='Grunter'
                    image={require('../images/grunter.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  No Size Limits
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: 5
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people on board: 15
                  </Text>
                </Card>
                <Card
                    title='Gummy Shark'
                    image={require('../images/gummyshark.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  Minimum size: 45 cm measured from the 5th gill slit to the base of the tail.
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: combined total of 2 Gummy and School Sharks.
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people are on board: combined total of 6 Gummy and School Sharks.
                  </Text>
                </Card>
                <Card
                    title='Harlequin'
                    image={require('../images/harlequin.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  No size limits
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: 2
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people are on board: 6                  </Text>
                </Card>
                <Card
                    title='King George Whiting'
                    image={require('../images/whiting.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  Minimum size measured from tip of snout to tip of tail:
                  East of longitude 136oE (including all Gulf waters): 32 cm, 
                  West of longitude 136oE: 30 cm                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: 10 in all waters                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people on board: 30
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Possession limit is one of the following:
                  72 fish, 10 kg of fillets, 36 fish and up to 5kg of fillets where a person has both fish and fillets
</Text>
                  </Card>
                  <Card
                    title='Mullet'
                    image={require('../images/mullet.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  Minimum legal length: 21 cm measured from tip of snout to tip of tail
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: 60
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people are on board: 180
                  </Text>
                  </Card>
                  <Card
                    title='Mulloway'
                    image={require('../images/mulloway.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  Minimum legal length: 82 cm measured from tip of snout to tip of tail
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: 2
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people on board:6
                  </Text>
                  </Card>
                  <Card
                    title='Nannygai'
                    image={require('../images/nannygai.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  Minimum legal length: 30 cm measured from tip of snout to tip of tail
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: 10
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people on board: 30
                  </Text>
                  </Card>
                  <Card
                    title='Salmon'
                    image={require('../images/salmon.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  Minimum legal length: 21 cm measured from tip of snout to tip of tail
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit
                  for Salmon 21 to 35 cm: 20, 
                  for Salmon longer than 35 cm: 10                 
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit (applies where 3 or more people on board):
                  for Salmon 21 to 35 cm: 60, 
                  for Salmon longer than 35 cm: 30              
                  </Text>
                  </Card>
                  <Card
                    title='Samsonfish'
                    image={require('../images/samsonfish.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  Minimum legal length: 88 cm measured from tip of snout to tip of tail
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: 1                
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people are on board: 3                  
                  </Text>
                  </Card>
                  <Card
                    title='Sand Crab'
                    image={require('../images/sandcrab.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  Minimum legal length: 10 cm measured across the carapace from side to side
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: 20 - combined with Blue Swimmer Crabs
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people are on board: 60 - combined with Blue Swimmer Crabs
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Restrictions: Females with external eggs are totally protected and must be returned to the water immediately
                  </Text>
                  </Card>
                  <Card
                    title='School Shark'
                    image={require('../images/schoolshark.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  Minimum legal length: 45 cm measured from the 5th gill slit to the base of the tail.
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: combined total of 2 Gummy and School Sharks.
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people on board: combined total of 6 Gummy and School Sharks.
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Restrictions: It is illegal to fish for sharks (or any other fish) using a wire trace that is 2mm diameter or greater in conjunction with a hook sized 12/0 or greater.
                  </Text>
                  </Card>
                  <Card
                    title='Sea Urchin'
                    image={require('../images/seaurchin.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  No minimum legal length
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Personal daily bag limit: 20               
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people are on board: 60                 
                  </Text>
                  </Card>
                  <Card
                    title='Snapper'
                    image={require('../images/Snapper.jpg')}
                    imageStyle={styles.image}>
                  <Text style={{marginBottom: 10}}>
                  Minimum legal length: 38 cm
                  </Text>
                  <Text style={{marginBottom: 10}}>
                  Daily boat limit when 3 or more people on board:
                  Snapper 38 to 60 cm: 15, 
                  Snapper over 60 cm: 6
                                    </Text>
                  <Text style={{marginBottom: 10}}>
                  Closed season:
                  Statewide midday 1 November to midday 15 December.                  </Text>
                  </Card>

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
        width: 250,
        height:110,
        alignSelf: 'center',
        
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
