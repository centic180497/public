import { makeStyles } from "@material-ui/core";
import ManageNavbar from "../../components/header/index";
import HeaderTable from "./header_table";
import SearchTable from "./search_violation";
import MapViolation from "./googlemap_violation";
import images from "../../public/assets/images.gif";
import {RequestStatus} from '../../utils/constants'
export default function Violation(props) {
  const classes = useStyles();
  return (
    <div style={{ height: "100vh" }}>
      <div>
        <ManageNavbar />
      </div>
      {/* <div className={classes.Searchviolation}>
        <SearchTable/>
      </div> */}
      <div className={classes.HeaderTable1}>
        <div className={classes.HeaderTable}>
          <SearchTable />
          <HeaderTable />
        </div>
        {props.status === RequestStatus.STARTED ? (
            <div className={classes.loadingrequest}>
              <img src={images} className={classes.loadingimg} />
            </div>
          ) : null}
        <div className={classes.map}>
          <MapViolation />
        </div>
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  Searchviolation: {
    marginTop: 20,
  },
  HeaderTable1: {
    display: "flex",
    flex: "1 1 auto",
    height: " calc(100vh - 70px)",
    [theme.breakpoints.down("sm", "xs")]: {
      flexDirection: "column",
      flex: 1,
    },
  },
  loadingrequest: {
    position: "absolute",
    width: "100%",
    top: "50%",
    left: "25%",
    zIndex: 1200,
  },
  loadingimg: {
    top: "20%",
    transform: "translate(-50%,-50%)",
    zIndex: 1200,
    height: 160,
    display: "inline-block",
  },
  HeaderTable: {
    width: "45%",
    paddingLeft: 10,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm", "xs")]: {
      width: "100%",
      display: "flex",
      paddingLeft: 10,
      flexDirection: "column",
    },
  },
  map: {
    height: "auto",
    flex: "1 1 auto",
    [theme.breakpoints.down("sm", "xs")]: {
      width: "100%",
      order: -1,
      height: 500,
    },
  },
}));
