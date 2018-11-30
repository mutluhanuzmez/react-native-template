import { delay } from "redux-saga";
import { put, call, select } from "redux-saga/effects";
import axios from "axios";
import { URL, to } from "../../shared/utility";
import { AsyncStorage, Easing } from "react-native";

import * as actions from "../actions";



export function* authUserSaga(action) {
  console.log(action);
  yield put(actions.authStart());
    let credentials = {
      email : action.email, 
      password : action.password
    }

    let err, data;
    [err , data] = yield to(axios.post( URL + 'users/login', credentials ));

    if(err || data === "undefined"){
      yield put(actions.authFail(err));
      yield put(actions.animateStart(action.butAnimation, 0, 200, Easing.linear));
    }else{
      yield put(actions.authSuccess(data.farms));
      yield put(actions.animateStart(action.navAnimation, 1, 300, Easing.linear));
      yield call(delay, 200);
      yield put(actions.navigateToPage(action.navigateTo));
    }

    yield put(actions.authFinish());
    yield call(delay, 3000);
    yield put(actions.authErrorClean());

}