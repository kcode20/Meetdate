import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MeetScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>This is where we would apply the knowledge for meeting!</Text>
				<Text> Hi Ke!!!! </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#a02929',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
