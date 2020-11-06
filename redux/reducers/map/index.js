import { combineReducers } from 'redux';
import {ParkingTypes, NoParkingTypes} from '../../action_types'
import {handleRequest} from '../helpers'

const initialState = {
  dataNoParking: [],
  dataParking: [],
};

const map = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const parking = (state = initialState, action) => {
  handleRequest(ParkingTypes.GET_DATA_PARKING_REQUEST, ParkingTypes.GET_DATA_PARKING_SUCCESS, ParkingTypes.GET_DATA_PARKING_FAILURE, state, action)
  switch(action.type) {
    case ParkingTypes.GET_DATA_PARKING_SUCCESS:
      return {
        ...state,
        dataParking: action.payload
      }
    default: return state
  }
}

export default combineReducers({
  parking, map
});
