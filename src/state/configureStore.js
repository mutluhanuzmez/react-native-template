import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import authReducer from './reducers/auth';
import navReducer from './reducers/navigation';
import animationReducer from './reducers/animation';

import { watcher } from "./sagas";



const rootReducer = combineReducers({
    auth: authReducer,
    nav: navReducer,
    animation: animationReducer,
    // add more reducers to use here
});

const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = compose;
if(__DEV__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(watcher);
    return store;
};

export default configureStore;