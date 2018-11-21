/** @format */

import { Navigation } from "react-native-navigation";
import LoginScreen from './src/containers/LoginScreen';
import WelcomeScreen from './src/containers/WelcomeScreen';

Navigation.registerComponent(`basestech.LoginScreen`, () => LoginScreen);
Navigation.registerComponent(`basestech.WelcomeScreen`, () => WelcomeScreen);

Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
            root: {
              component: {
                name: "basestech.LoginScreen"
              }
            }
      });
});