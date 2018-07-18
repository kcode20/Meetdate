import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import MeetScreen from './MeetScreen';

const App = createBottomTabNavigator({
	Home: { screen: HomeScreen },
	Profile: { screen: MeetScreen },
});

export default App;
