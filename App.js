/** @format */

import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';
import configureStore from './src/state/configureStore';

const store = configureStore();

Navigation.registerComponentWithRedux(`basestech.LoginScreen`, () => require('./src/containers/LoginScreen').default, Provider, store);
Navigation.registerComponentWithRedux(`basestech.WelcomeScreen`, () => require('./src/containers/WelcomeScreen').default, Provider, store);

Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
            root: {
              component: {
                name: "basestech.LoginScreen"
              }
            }
      });
});