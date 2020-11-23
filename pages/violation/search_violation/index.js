import SearchTable from './search_violation'
import { connect } from 'react-redux'
import {getSearchViolation}from '../../../redux/actions/search_violation/get_search_violation'
import {getDataInputSearch,ClearDataInputSearch,clearInfowindow}from '../../../redux/actions/search_violation/index'
const mapStateToProps=({searchViolation})=>({
    status:searchViolation.api.getSearchViolation.status,
})
export default connect(mapStateToProps,{
    clearInfowindow,
    getSearchViolation,
    getDataInputSearch,
    ClearDataInputSearch
})(SearchTable)