import { connect } from 'react-redux'
import {showInfowindow}from '../../../redux/actions/search_violation/index'
import {getSearchViolation}from '../../../redux/actions/search_violation/get_search_violation'
import HeaderTable from './header_table'
const mapStateToProps=({searchViolation})=>({
    vehicle:searchViolation.reducer_search_violation.Violation,
    Infowindow:searchViolation.reducer_search_violation.showInfowindow,
    plate:searchViolation.reducer_search_violation.dataInput,
    ButtonSearch:searchViolation.reducer_search_violation.ButtonSearch,
    status:searchViolation.api.getSearchViolation.status,
})
export default connect(mapStateToProps,{
    showInfowindow,
    getSearchViolation
})(HeaderTable)
