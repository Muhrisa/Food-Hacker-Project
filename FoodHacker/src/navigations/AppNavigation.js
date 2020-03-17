//import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import React from "react";
import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import WelcomeScreen from '../screens/Login/WelcomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Login/RegisterScreen';
import SurveyScreen from '../screens/Login/SurveyScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';

const MainNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Survey: SurveyScreen,
    Home: HomeScreen,
    Categories: CategoriesScreen,
    Recipe: RecipeScreen,
    RecipesList: RecipesListScreen,
    Ingredient: IngredientScreen,
    Search: SearchScreen,
    IngredientsDetails: IngredientsDetailsScreen
  },
  {
    initialRouteName: 'Welcome',
    // headerMode: 'float',
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1
      }
    })
  }
);

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainer
  }
);

export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;