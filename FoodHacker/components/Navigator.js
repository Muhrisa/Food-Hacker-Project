import React from "react";
import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from '../screens/Home';
import EmailInput from '../screens/EmailInput';
import PasswordInput from '../screens/PasswordInput';
import Login from '../screens/Login';
import { TouchableOpacity } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";


const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Login: {
      screen: Login
    },
    EmailInput: {
      screen: EmailInput
    },
    PasswordInput: {
      screen: PasswordInput
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#008000',
        elevation: 0,
        shadowOpacity: 0
      },
      headerLeft: () => 
        <TouchableOpacity
          style={{ marginLeft: 20 }}
          onPress={() => navigation.openDrawer()}
        >
          <IonIcons name="md-menu" size={30} />
        </TouchableOpacity>
      
      
    })
  }
);

const DrawerNavigator = createDrawerNavigator({
  AppNavigator: {
    screen: AppNavigator,
    navigationOptions: {
      drawerLabel: "Home"
    }
  }
});
export default createAppContainer(DrawerNavigator);