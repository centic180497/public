import SearchTable from './search_violation'
import { connect } from 'react-redux'
import {getSearchViolation}from '../../../src/redux/actions/search_violation/get_search_violation'
import {getDataInputSearch,ClearDataInputSearch,clearInfowindow}from '../../../src/redux/actions/search_violation/index'
const mapStateToProps=({searchViolation})=>({
    status:searchViolation.api.getSearchViolation.status,
})
export default connect(mapStateToProps,{
    clearInfowindow,
    getSearchViolation,
    getDataInputSearch,
    ClearDataInputSearch
})(SearchTable)