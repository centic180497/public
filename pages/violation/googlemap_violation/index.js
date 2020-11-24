import MapViolation from './googlemap_violation'
import {connect} from 'react-redux'
import {clearInfowindow,toggleBoxNote} from '../.././../redux/actions/search_violation/index'
const mapStateToProps=({searchViolation})=>({
    Infowindow:searchViolation.reducer_violation_local.showInfowindow,
    vehicle:searchViolation.reducer_search_violation.Violation,
    noParking:searchViolation.reducer_search_violation.noParking,
    openNote:searchViolation.reducer_violation_local.openNote
})
export default connect(mapStateToProps,{
    clearInfowindow,
    toggleBoxNote
})(MapViolation)