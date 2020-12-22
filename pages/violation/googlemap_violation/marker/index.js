import MarkerComponent from "./marker";
import { connect } from "react-redux";
import ShapeNoparking from "./shape_noparking";
import { clearInfowindow } from "../../../../src/redux/actions/search_violation";
const mapStateToProps = ({ searchViolation }) => ({
  Infowindow: searchViolation.reducer_violation_local.showInfowindow.id,
  vehicle: searchViolation.reducer_search_violation.Violation,
});
export default connect(mapStateToProps, {
  clearInfowindow,
})(MarkerComponent, ShapeNoparking);
