import React, {Component} from 'react';
import {View, StyleSheet, Alert, Navigation, KeyboardAvoidingView, ScrollView,} from 'react-native';
import {Text, Icon, Input, Button, SocialIcon} from 'react-native-elements';
import {BoxPasswordStrengthDisplay} from 'react-native-password-strength-meter';

import firebase from "firebase";

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

export class EmailInput extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props){
    super(props)

    this.state = {
      email: '',
      first_name: '',
      password: ''
    }
  }
  //changeUsername(username){
    //this.setState(username)
  //}

  _handlePress() {
    //this.setState({username:username})
    //this.setState({email: email})
     Alert.alert("Username value: "+this.state.first_name);
     Alert.alert("Email value: "+this.state.email);

     //firebase.initializeApp(firebaseConfig);
     firebase.database().ref('users').set(
                {
                    name: this.state.first_name,
                    email: this.state.email,
                    password: this.state.password
                }
            )
     //Add the user to our database here

     this.props.navigation.navigate('PasswordInput');
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={'padding'}
        enabled
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 84}>
        <ScrollView
          style={styles.container}
          keyboardShouldPersistTaps="handled">
          <View style={styles.headerContainer}>
            <Icon name= "ios-person-add" size={80} type="ionicon" color={'#32a8a8'} />
            <Text h4 style={{textAlign: 'center'}}>Register User:</Text>
          </View>

          <Input placeholder=" Name"
            onChangeText ={(text) => this.setState({first_name:text})}
            leftIcon={
              <Icon
                name="ios-person"
                type="ionicon"
                color="rgba(50, 168, 168, 1)"
                size={25}
              />
            }
            
            inputContainerStyle={{
              borderWidth: 1,
              borderColor: 'white',
              borderLeftWidth: 0,
              height: 50,
              backgroundColor: 'white',
              marginBottom: 30,
              marginTop:15,
            }}
            placeholderTextColor="grey"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            ref={input => (this.email2Input = input)}
            onSubmitEditing={() => {
              this.password2Input.focus();
            }}

          />

          <Input placeholder= " Email"
            onChangeText ={(text) => this.setState({email:text})}
            leftIcon={
              <Icon
                name="ios-mail"
                type="ionicon"
                color="rgba(50, 168, 168, 1)"
                size={25}
                
              />
            }
            inputContainerStyle={{
              borderWidth: 1,
              borderColor: 'white',
              borderLeftWidth: 0,
              height: 50,
              backgroundColor: 'white',
              marginBottom: 30,
            }}
            placeholderTextColor="grey"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            ref={input => (this.email2Input = input)}
            onSubmitEditing={() => {
              this.password2Input.focus();
            }}

          />

          <Input placeholder=" Password"   
            onChangeText ={(text) => this.setState({password:text})}
            leftIcon={
              <Icon
                name="lock"
                color="rgba(50, 168, 168, 1)"
                size={25}
              />
            }
            
            inputContainerStyle={{
              borderWidth: 1,
              borderColor: 'white',
              borderLeftWidth: 0,
              height: 50,
              backgroundColor: 'white',
              marginBottom: 30,
            }}
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
            returnKeyType="next"
            ref={input => (this.email2Input = input)}
          />
          <BoxPasswordStrengthDisplay password={this.state.password} />
          
          <View style={styles.btnWrapper}>
             <Button title="Continue"
              loading={false}
              loadingProps={{size: 'small', color: 'white'}}
              buttonStyle={{
                backgroundColor: '#32a8a8',
                borderRadius: 15,
              }}
              titleStyle={{fontWeight: 'bold', fontSize: 23}}
              containerStyle={{marginVertical: 40, height: 50, width: 300}}
              onPress={() => this._handlePress()}
              underlayColor="transparent"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F6FA',
    height: '100%',
  },
  headerContainer: {
    top: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  btnWrapper: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialLogin: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentView: {
    // marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainerStyle: {
    marginTop: 16,
    width: '90%',
  },
  keyboardAvoidingView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
export default EmailInput;

