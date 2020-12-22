import { connect } from 'react-redux'
import SiteMap from './site_map'
import {getDataNoParking} from '../../redux/actions/parking/index'

export default connect(null, {getDataNoParking})(SiteMap)