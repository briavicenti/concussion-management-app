import React from 'react';
import { 
	StyleSheet, 
	Text,
	View,
	Image,
} from 'react-native';

export default class BackgroundImage extends React.Component {

    render() {
        return (
            <Image 
            	source={this.props.url}
            	style={styles.backgroundImage}>
                {this.props.children}
            </Image>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});