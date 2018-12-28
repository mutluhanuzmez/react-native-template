import * as actionTypes from "./actionTypes";
import { to } from "../../shared/utility";

export const animateStart = ( animationItem, toValue, duration, easing ) => {
  console.log(animationItem);
  return {
    type: actionTypes.ANIMATE_START,
    animationItem: animationItem,
    toValue: toValue,
    duration: duration,
    easing: easing
  };
};

export const animateStop = ( animationItem ) => {
    return {
      type: actionTypes.ANIMATE_STOP,
      animationItem: animationItem
    };
  };