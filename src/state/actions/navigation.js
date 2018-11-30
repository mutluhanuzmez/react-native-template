import * as actionTypes from "./actionTypes";
import { to } from "../../shared/utility";

export const navigateToPage = ( pageName ) => {
  return {
    type: actionTypes.NAVIGATE_TO_PAGE,
    pageName: pageName
  };
};
