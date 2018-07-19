import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import MeetScreen from './MeetScreen';
import * as firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json

// import Icon from 'meetup-web-components/lib/media/Icon';

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
},
{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-contacts`;
        } else if (routeName === 'Profile') {
          iconName = `ios-pulse`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
	}),
}
);

export default App;


