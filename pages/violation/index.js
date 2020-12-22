import Violation from "./violation";
import { connect } from "react-redux";
import { getNoparkingViolation } from "../../src/redux/actions/search_violation/get_search_violation";
const mapStateToProps = ({ searchViolation }) => ({
  status: searchViolation.api.getSearchViolation.status,
});
export default connect(mapStateToProps, {
  getNoparkingViolation,
})(Violation);
