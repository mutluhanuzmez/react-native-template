import { Navigation } from 'react-native-navigation';

export const goToWelcome = () => Navigation.setRoot({
    root: {
        component: {
            name: 'basestech.WelcomeScreen',
        }
    }
})