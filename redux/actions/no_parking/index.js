import { NoParkingTypes } from '../../action_types'

export const getDataNoParkingRequest = () => {
    return {
        type: NoParkingTypes.GET_DATA_NOPARKING_REQUEST,
    }
}

export const getDataNoParkingSuccess = (payload) => {
    return {
        type: NoParkingTypes.GET_DATA_NOPARKING_SUCCESS,
        payload,
    }
}

export const getDataNoParkingFailure = (error) => {
    return {
        type: NoParkingTypes.GET_DATA_NOPARKING_FAILURE,
        error,
    }
}