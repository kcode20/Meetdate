import React from 'react';
import {
	StyleSheet,
	ActivityIndicator,
	Text,
	View,
	FlatList,
} from 'react-native';

export default class MeetScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = { groups: {}, isLoading: true };
	}

	componentWillMount() {
		return fetch(
			'https://api.meetup.com/find/groups?key=7971183234113c561618114b24513b6e'
		)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({
					groups: responseJson,
					isLoading: false,
				});
			})
			.catch(error => {
				console.error(error);
			});
	}

	render() {
		const { groups, isLoading } = this.state;
		// console.warn(groups);
		if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, padding: 20 }}>
					<ActivityIndicator />
				</View>
			);
		}

		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.groups}
					renderItem={({ item }) => <Text>{item.name}</Text>}
					keyExtractor={(item, index) => index}
				/>
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
