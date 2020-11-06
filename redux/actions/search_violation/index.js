import * as Types from '../../action_types/search_violation'
export function showInfowindow(item){
    
    return{
        type:Types.SHOW_INFOWINDOW_VIOLATION,
        payload:item
    }
}
export function clearInfowindow(){
    
    return{
        type:Types.CLEAR_INFOWINDOW_VIOLATION,
    }
}