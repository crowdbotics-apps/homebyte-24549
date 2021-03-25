import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList218479Navigator from '../features/ArticleList218479/navigator';
import Maps218466Navigator from '../features/Maps218466/navigator';
import ArticleList4205601Navigator from '../features/ArticleList4205601/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList218479: { screen: ArticleList218479Navigator },
Maps218466: { screen: Maps218466Navigator },
ArticleList4205601: { screen: ArticleList4205601Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
