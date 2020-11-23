import { SearchViolation } from "../../action_types";
import api from "./api";
import { combineReducers } from "redux";
const INITIAL_STATE = {
  Violation: [],
  dataInput: "",
  noParking:[],
  ButtonSearch: false,
  showInfowindow: {
    id: null,
    info: null,
  },
};
const reducer_search_violation = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchViolation.SHOW_INFOWINDOW_VIOLATION:
      return {
        ...state,
        showInfowindow: {
          id: action.payload.id,
          info: action.payload,
        },
      };
    case SearchViolation.CLEAR_INFOWINDOW_VIOLATION:
      return {
        ...state,
        showInfowindow: {
          id: null,
          info: null,
        },
      };
    case SearchViolation.GET_SEARCH_VIOLATION_SUCCESS:
      return {
        ...state,
        Violation: action.payload,
      };
    case SearchViolation.DATA_INPUT_SEARCH:
      return {
        ...state,
        dataInput: action.payload,
        ButtonSearch: true,
      };
    case SearchViolation.CLEAR_DATA_SEARCH:
      return {
        ...state,
        Violation: [],
        // dataInput: "",
      };
    case SearchViolation.GET_NOPARKING_VIOLATION_SUCCESS:
      return {
        ...state,
        noParking: action.payload,
        // dataInput: "",
      };

    default:
      return state;
  }
};
export default combineReducers({ api, reducer_search_violation });
