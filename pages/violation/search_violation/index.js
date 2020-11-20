import SearchTable from './search_violation'
import { connect } from 'react-redux'
import {getSearchViolation}from '../../../redux/actions/search_violation/get_search_violation'
import {getDataInputSearch,ClearDataInputSearch}from '../../../redux/actions/search_violation/index'
export default connect(null,{
    getSearchViolation,
    getDataInputSearch,
    ClearDataInputSearch
})(SearchTable)