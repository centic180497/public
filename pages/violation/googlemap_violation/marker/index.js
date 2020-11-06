// import MarkerComponent from './marker'
import {connect} from 'react-redux'
import ShapeNoparking from './shape_noparking'
import {clearInfowindow} from '../../../../redux/actions/search_violation/index'
const mapStateToProps=({searchViolation})=>({
    Infowindow:searchViolation.showInfowindow
})
export default connect(mapStateToProps,{
    clearInfowindow
}) (ShapeNoparking)