import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import { AsyncStorage, Animated } from "react-native";

const initialState = {
    //initial states
    stateInitalizer : null
};

const animateStart = ( state, action ) => {
    Animated.timing(action.animationItem, {
        toValue: action.toValue,
        duration: action.duration,
        easing: action.easing,
      }).start();
    return state;
};

const animateStop = ( state, action ) => {
    //Is it necessary?
    return state;
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ANIMATE_START: return animateStart(state, action);
        case actionTypes.ANIMATE_STOP: return animateStop(state, action);
        default:
            return state;
    }
};

export default reducer;