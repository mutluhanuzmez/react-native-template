import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import { AsyncStorage } from "react-native";
import { setRoot } from '../../navigation';

const initialState = {
    //initial states
    liveComponent : null,
    navigationEnd: false
};

const navigateToPage = ( state, action ) => {
    setRoot(action.pageName);
    return updateObject( state, { liveComponent: action.pageName, navigationEnd: true } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.NAVIGATE_TO_PAGE: return navigateToPage(state, action);
        default:
            return state;
    }
};

export default reducer;