import React from 'react';
import { 
	StyleSheet, 
	Text,
	View
} from 'react-native';
import {
	bg,
	cAccent1,
	cAccent2,
	cAccent3,
} from '../assets/styles.js'

export class Bold extends React.Component {
	render() {
		return (
			<Text style={[{fontWeight: 'bold'}, this.props.style]}>
				{this.props.children}
			</Text>
		);
	}
}

export class BlockText extends React.Component {
	render() {
		return (
			<Text style={[{fontSize: 12}, this.props.style]}>
				{this.props.children}
			</Text>
		);
	}
}

export class Bullet extends React.Component {
	render() {
		return (
			<View style={{flexDirection: 'row'}}>
        	<Text style={{fontSize: 12}}>{'\u2022'}</Text>
        	<Text style={[{flex: 1, paddingLeft: 3, paddingBottom: 3}, this.props.style]}>
        		{this.props.children}
        	</Text>
      		</View>
		);
	}
}

export class Header1 extends React.Component {
	render() {
		return (
			<Text style={[styles.header1, this.props.style]}>
				{this.props.children}
			</Text>
		);
	}
}

export class Header2 extends React.Component {
	render() {
		return (
			<Text style={[styles.header2, this.props.style]}>
				{this.props.children}
			</Text>
		);
	}
}

export class Header3 extends React.Component {
	render() {
		return (
			<Text style={[styles.header3, this.props.style]}>
				{this.props.children}
			</Text>
		);
	}
}

export class Header4 extends React.Component {
	render() {
		return (
			<Text style={[styles.header4, this.props.style]}>
				{this.props.children}
			</Text>
		);
	}
}

const styles = StyleSheet.create({
	header1: {
		fontSize: 22,
		color: cAccent2,
		fontWeight: 'bold',
		marginVertical: 5,
	},
	header2: {
		fontSize: 18,
		color: cAccent2,
		fontWeight: 'bold',
		marginVertical: 5,

	},
	header3: {
		fontSize: 15,
		color: cAccent3,
		fontWeight: 'bold',
		marginVertical: 5,
	},
	header4: {
		fontSize: 13,
		color: cAccent3,
		fontWeight: 'bold',
		marginVertical: 5,

	},
});