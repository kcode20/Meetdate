import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import MeetScreen from './MeetScreen';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyAWsG-WSBR7pYKSZXAHCHSOHn1ZBvGrczE",
	authDomain: "meetdate-e58f6.firebaseapp.com",
	databaseURL: "https://meetdate-e58f6.firebaseio.com",
	projectId: "meetdate-e58f6",
	storageBucket: "meetdate-e58f6.appspot.com",
	messagingSenderId: "1059265059242"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const App = createBottomTabNavigator({
	Home: { screen: HomeScreen },
	Profile: { screen: MeetScreen },
});

export default App;

