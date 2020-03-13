import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppContainer from './src/navigations/AppNavigation';
import HomeScreen from './src/screens/Home/HomeScreen';
import CategoriesScreen from './src/screens/Categories/CategoriesScreen';
import {
  DrawerNavigator,
  StackNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import SplashScreen from './src/screens/Splash/SplashScreen';
import firebase from "firebase";

class FoodHacker extends React.Component {
 	componentDidMount(){
  		var firebaseConfig = {
    	apiKey: "AIzaSyBvf0SfC3QmJoykCpuQVRk2jDshqn3B3qY",
    	authDomain: "foodhackerdb.firebaseapp.com",
    	databaseURL: "https://foodhackerdb.firebaseio.com",
    	projectId: "foodhackerdb",
    	storageBucket: "foodhackerdb.appspot.com",
    	messagingSenderId: "610704435607",
    	appId: "1:610704435607:web:368119793451f3c8b33cd2",
    	measurementId: "G-FWPCPMYH6J"
    	};
  // Initialize Firebase
    	firebase.initializeApp(firebaseConfig);
    	//firebase.analytics();
  		
  	}
  render() {
    return <AppContainer />;
  }
}

export default FoodHacker;
