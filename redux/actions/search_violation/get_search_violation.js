import { Client } from "../../../client/";
import * as actions from "./index";
export const getSearchViolation = (value) => {
  return async (dispatch) => {
    dispatch(actions.getSearchViolationRequest());
    let data;
    try {
      data = await Client.getSearchViolation(value);
    } catch (error) {
      dispatch(actions.getSearchViolationFailure(error));
      return error;
    }
    return dispatch(actions.getSearchViolationSuccess(data));
  };
};
export const getNoparkingViolation = () => {
  return async (dispatch) => {
    dispatch(actions.getNoparkingViolationRequest());
    let data;
    try {
      data = await Client.getDataNoParking();
    } catch (error) {
      dispatch(actions.getNoparkingViolationFailute(error));
      return error;
    }
    return dispatch(actions.getNoparkingViolationSuccess(data));
  };
};
