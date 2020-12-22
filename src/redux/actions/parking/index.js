import {Client} from '../../../client'

import * as actions from './parking'

export const getDataNoParking = () => {
    return async (dispatch) => {
        dispatch(actions.getDataParkingRequest())
        let data
        try {
            data = await Client.getParking()
        } catch (error) {
            dispatch(actions.getDataParkingFailure(error))
            return error
        }

        return dispatch(actions.getDataParkingSuccess(data))
    }
}