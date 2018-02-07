const WEBVIEW_REF = "WEBVIEW_REF";
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform, TouchableOpacity, WebView } from 'react-native';

import { Text, Button, Icon } from 'react-native-elements';

import colors from 'HSColors';
import socialColors from 'HSSocialColors';
import fonts from 'HSFonts';

class ButtonsDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { canGoBack: false };
    }

    render() {
        return (
            <View style={styles.container}>

                <WebView
                    ref={WEBVIEW_REF}
                    style={{flex: 1}}
                    onNavigationStateChange=
                        {this.onNavigationStateChange.bind(this)}
                    source={{uri: 'https://learn.tafesa.edu.au/login/index.php'}}
                />
                <View style={styles.bottombar}>
                    <TouchableOpacity
                        disabled={!this.state.canGoBack}
                        onPress={this.onBack.bind(this)}
                    >
                        <Text style={this.state.canGoBack ? styles.topbarText : styles.topbarTextDisabled}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    onBack() {
        this.refs[WEBVIEW_REF].goBack();
    }

    onNavigationStateChange(navState) {
        this.setState({
            canGoBack: navState.canGoBack
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    bottombar: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    topbarTextDisabled: {
        paddingLeft: 10,
        color: 'gray',
    },
    topbarText: {
        paddingLeft: 10,
    }
});

export default ButtonsDetail;
