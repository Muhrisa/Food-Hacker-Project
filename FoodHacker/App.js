import React, { Component } from "react";
import Navigator from "./components/Navigator";
import { StyleSheet, Text, View } from 'react-native';
import firebase from "firebase";

class App extends Component {
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
  		
  		firebase.database().ref('users/002').set(
                {
                    name: 'Marisa Roldan 001',
                    age: 21,
                    comments: "cool"
                }
            )
    }	
  	render() {
    	return <Navigator />;
  	}
}
export default App;

