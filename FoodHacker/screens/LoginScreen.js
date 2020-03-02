import React, {Component} from 'react';
import {View, StyleSheet, Alert, ActivityIndicator, TouchableOpacity, KeyboardAvoidingView, ScrollView,} from 'react-native';
import {Text, Icon, Input, Button, SocialIcon} from 'react-native-elements';

export class LoginScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };
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
            <Icon name= "ios-log-in" size={80} type="ionicon" color={'#32a8a8'} />
          </View>

          <View style={styles.wrapper}>
		   <Input
		     leftIcon={
		       <Icon
		         name="email-outline"
		         type="material-community"
		         color="rgba(110, 120, 170, 1)"
		         size={25}
		       />
		     }
		     placeholder="Email"
		     inputContainerStyle={styles.input}
		     placeholderTextColor="grey"
		     autoCapitalize="none"
		     autoCorrect={false}
		     keyboardType="email-address"
		     returnKeyType="next"
		   />
		   <Input
		     leftIcon={
		       <Icon
		         name="lock"
		         type="simple-line-icon"
		         color="rgba(110, 120, 170, 1)"
		         size={25}
		       />
		     }
		     inputContainerStyle={styles.input}
		     placeholderTextColor="grey"
		     placeholder="Password"
		     autoCapitalize="none"
		     secureTextEntry={true}
		     autoCorrect={false}
		     keyboardType="default"
		     returnKeyType="next"
		   />
		 </View>
          <View style={styles.socialWrapper}>
          <Text style={styles.signinwith}>Sign in with</Text>
          <View style={styles.socialLogin}>
            <SocialIcon type="facebook" light />
            <SocialIcon type="google" light />
            <SocialIcon type="twitter" light />
          </View>
          <Button
            title="Login"
            loading={false}
            loadingProps={{size: 'small', color: 'white'}}
            buttonStyle={{
              backgroundColor: '#32a8a8',
              borderRadius: 15,
            }}
            titleStyle={{fontWeight: 'bold', fontSize: 23}}
            containerStyle={{marginVertical: 10, height: 50, width: 300}}
            onPress={() => Alert.alert('LOGIN!')}
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
  wrapper:{
  },
  input: {
  	borderWidth: 1,
    borderColor: 'white',
    borderLeftWidth: 0,
    height: 50,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  socialWrapper: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialLogin: {
    flexDirection: 'row',
    marginTop: 10,
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
export default LoginScreen;

