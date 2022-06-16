import HomeScreen from './Home';
/* PLOP_INJECT_IMPORT */
import { StackNavigationOptions } from '@react-navigation/stack';

export type CommonStackParamList = {
  Home: undefined;
  /* PLOP_INJECT_TYPE */
};

const options: StackNavigationOptions = { gestureEnabled: false };

const commonScreens = {
  Home: { component: HomeScreen, options },
  /* PLOP_INJECT_SCREEN */
};

export default commonScreens;
