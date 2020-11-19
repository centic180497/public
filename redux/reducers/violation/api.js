import { combineReducers } from "redux";
import { initialRequestState, handleRequest } from "../helpers";
import {SearchViolation}from '../../action_types'

function getSearchViolation(state = initialRequestState(), action) {
  return handleRequest(
    SearchViolation.GET_SEARCH_VIOLATION_REQUEST,
   SearchViolation.GET_SEARCH_VIOLATION_SUCCESS,
    SearchViolation.GET_SEARCH_VIOLATION_FAILURE,
    state,
    action
  );
}
export default combineReducers({
  getSearchViolation,
});
// const initialState = {
//   Violation: [],
//   loading: false,
// };
// const Violation = (state = initialState, action) => {
//     console.log(action);

//   switch (action.type) {
//     case searchViolation.
//     default:
//       return state;
//   }
// };
// export default combineReducers({
//     Violation
// })
