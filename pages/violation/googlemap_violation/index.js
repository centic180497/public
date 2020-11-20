import MapViolation from './googlemap_violation'
import {connect} from 'react-redux'
import {clearInfowindow} from '../.././../redux/actions/search_violation/index'
const mapStateToProps=({searchViolation})=>({
    Infowindow:searchViolation.reducer_search_violation.showInfowindow,
    vehicle:searchViolation.reducer_search_violation.Violation,
})
export default connect(mapStateToProps,{
    clearInfowindow
})(MapViolation)