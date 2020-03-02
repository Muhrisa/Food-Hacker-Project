import React, {Component} from 'react';
import {View, StyleSheet, Alert, KeyboardAvoidingView, ScrollView,} from 'react-native';
import {Text, Icon, Input, Button, SocialIcon} from 'react-native-elements';

export class EmailInputScreen extends Component {
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
            <Icon name= "ios-person-add" size={80} type="ionicon" color={'#32a8a8'} />
            <Text h4 style={{textAlign: 'center'}}>Enter Email:</Text>
          </View>
          <Input
            leftIcon={
              <Icon
                name="ios-mail"
                type="ionicon"
                color="rgba(50, 168, 168, 1)"
                size={25}
              />
            }
            placeholder=" Email"
            inputContainerStyle={{
              borderWidth: 1,
              borderColor: 'white',
              borderLeftWidth: 0,
              height: 50,
              backgroundColor: 'white',
              marginBottom: 80,
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
          <View style={styles.btnWrapper}>
             <Button
              title="Continue"
              loading={false}
              loadingProps={{size: 'small', color: 'white'}}
              buttonStyle={{
                backgroundColor: '#32a8a8',
                borderRadius: 15,
              }}
              titleStyle={{fontWeight: 'bold', fontSize: 23}}
              containerStyle={{marginVertical: 10, height: 50, width: 300}}
              onPress={() => Alert.alert('REGISTERED EMAIL!')}
              //onPress={() => this.props.navigation.navigate('PasswordInputScreen')}
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
export default EmailInputScreen;

