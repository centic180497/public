import {Client} from '../../../client/'
import * as actions from './index'
export const  getSearchViolation=(value)=>{
    return async(dispatch)=>{
        dispatch(actions.getSearchViolationRequest())
        let data
        try{
            data=await Client.getSearchViolation(value)
        }catch(error){
            dispatch(actions.getSearchViolationFailure(error))
            return error
        }
        return dispatch(actions.getSearchViolationSuccess(data))
    }
}