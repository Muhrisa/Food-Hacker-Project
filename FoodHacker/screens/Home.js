import * as React from 'react';
import {View, StyleSheet, ActivityIndicator, Alert, Navigation, TouchableOpacity,} from 'react-native';
import {Text, Icon, Image, Button} from 'react-native-elements';
//import { NavigationContainer } from 'react-navigation-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';

import { MonoText } from '../components/StyledText';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../assets/images/food.png')}
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          <Text h4> Welcome to Food Hacker</Text>
          <Text style={styles.getStartedText}>
            CS 125 Project
          </Text>
        </View>

        <View style={styles.contentView}>
          <Button
            onPress={() => navigation.navigate('EmailInput')}
            title="Get started"
            loading={false}
            loadingProps={{size: 'small', color: 'white'}}
            buttonStyle={{
              backgroundColor: '#32a8a8',
              borderRadius: 5,
            }}
            titleStyle={{fontWeight: 'bold', fontSize: 23}}
            containerStyle={{marginVertical: 10, height: 50, width: 300}}
            underlayColor="transparent"
          />
          <Text h4 style={{textAlign: 'center', color: 'grey'}}>
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}>
            <Text h4 style={{textAlign: 'center', color: 'red'}}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

Home.navigationOptions = {
  headerShown: false,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  contentView: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
});
