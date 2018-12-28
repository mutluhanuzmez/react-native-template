import { Navigation } from 'react-native-navigation';

export const setRoot = ( name ) => Navigation.setRoot({
    root: {
        component: {
            name: name,
        }
    }
})