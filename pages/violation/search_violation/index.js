import SearchTable from './search_violation'
import { connect } from 'react-redux'
import {getSearchViolation}from '../../../redux/actions/search_violation/get_search_violation'

export default connect(null,{
    getSearchViolation
})(SearchTable)