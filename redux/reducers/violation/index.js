import { SearchViolation } from "../../action_types";
import api from "./api";
import { combineReducers } from "redux";
const INITIAL_STATE = {
  Violation: [],
  noParking: [],
};
const VIOLATION_STATE = {
  openNote: true,
  ButtonSearch: false,
  showInfowindow: {
    id: null,
    info: null,
  },
  dataInput: "",
};
const reducer_violation_local = (state = VIOLATION_STATE, action) => {
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
    case SearchViolation.DATA_INPUT_SEARCH:
      return {
        ...state,
        dataInput: action.payload,
        ButtonSearch: true,
      };
    case SearchViolation.TOGGLE_HIDE_NOTE:
      return {
        ...state,
        openNote: !state.openNote,
      };

    default:
      return state;
  }
};
const reducer_search_violation = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchViolation.GET_SEARCH_VIOLATION_SUCCESS:
      return {
        ...state,
        Violation: action.payload,
      };

    case SearchViolation.CLEAR_DATA_SEARCH:
      return {
        ...state,
        Violation: [],
      };
    case SearchViolation.GET_NOPARKING_VIOLATION_SUCCESS:
      return {
        ...state,
        noParking: action.payload,
      };

    default:
      return state;
  }
};
export default combineReducers({
  api,
  reducer_search_violation,
  reducer_violation_local,
});
