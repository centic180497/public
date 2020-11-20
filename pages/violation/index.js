import Violation from './violation'
import {connect} from 'react-redux'
const mapStateToProps=({searchViolation})=>({
    status:searchViolation.api.getSearchViolation.status,
})
export default connect(mapStateToProps,{})(Violation)