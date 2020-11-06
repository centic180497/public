import { connect } from 'react-redux'
import {showInfowindow}from '../../../redux/actions/search_violation/index'
import HeaderTable from './header_table'
const mapStateToProps=({searchViolation})=>({
    Infowindow:searchViolation.showInfowindow
})
export default connect(mapStateToProps,{
    showInfowindow
})(HeaderTable)
