import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen114463Navigator from '../features/BlankScreen114463/navigator';
import BlankScreen014461Navigator from '../features/BlankScreen014461/navigator';
import BlankScreen014351Navigator from '../features/BlankScreen014351/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen114463: { screen: BlankScreen114463Navigator },
BlankScreen014461: { screen: BlankScreen014461Navigator },
BlankScreen014351: { screen: BlankScreen014351Navigator },

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
