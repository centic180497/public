import {SearchViolation} from '../../action_types'
export function showInfowindow(item){
    
    return{
        type:SearchViolation.SHOW_INFOWINDOW_VIOLATION,
        payload:item
    }
}
export function clearInfowindow(){
    
    return{
        type:SearchViolation.CLEAR_INFOWINDOW_VIOLATION,
    }
}
export function getSearchViolationRequest(){
    return{
        type:SearchViolation.GET_SEARCH_VIOLATION_REQUEST
    }
}
export function getSearchViolationSuccess(data){
    return{
        type:SearchViolation.GET_SEARCH_VIOLATION_SUCCESS,
        payload:data
    }
}
export function getSearchViolationFailure(err){
    return{
        type:SearchViolation.GET_SEARCH_VIOLATION_FAILURE,
        err
    }
}