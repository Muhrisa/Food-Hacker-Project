import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import EmailInputscreen from '../screens/EmailInputScreen';
import PasswordInputscreen from '../screens/PasswordInputScreen';
const StackNavigator = createStackNavigator({
  HomeScreen: HomeScreen,
  LoginScreen: LoginScreen,
  EmailInputscreen: EmailInputscreen,
  PasswordInputscreen: PasswordInputscreen,
});
export default createAppContainer(StackNavigator);