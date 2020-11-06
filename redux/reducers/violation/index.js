import * as types from "../../action_types/search_violation";
const INITIAL_STATE = {
  showInfowindow: {
    id: null,
    info: null,
  },
};
const reducer_search_violation = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SHOW_INFOWINDOW_VIOLATION:
      return {
        ...state,
        showInfowindow: {
          id: action.payload.id,
          info: action.payload,
        },
      };
    case types.CLEAR_INFOWINDOW_VIOLATION:
      return {
        ...state,
        showInfowindow: {
          id: null,
        },
      };
    default:
      return state;
  }
};
export default reducer_search_violation;
