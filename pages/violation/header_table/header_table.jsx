import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TableHead, TableRow, TableCell, Checkbox } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import { DataGrid } from "@material-ui/data-grid";
import { useDemoData } from "@material-ui/x-grid-data-generator";
import Pagination from "@material-ui/lab/Pagination";
import img from "../../../public/assets/violation.jpg";
import Typography from "@material-ui/core/Typography";
import img2 from "../../../public/assets/img.jpg";
import LogoData from "../../../public/assets/edit.gif";
// import { Scrollbars } from 'react-custom-scrollbars';

function HeaderTable(props) {
  const classes = useStyles();
  const { listViolation, updateSelectViolation, violationSelected } = props;
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });
  const vehicle = [
    {
      id: "1",
      path: [
        { lat: 16.081238661120641, lng: 108.16631503668134 },
        { lat: 16.073486130125332, lng: 108.18519778814701 },
      ],
      lat: "16.04319399907483",
      lng: "108.21515312158203",
      image: img2,
      vehicle: "43A-11491",
      type: "Dừng xe nơi cấm dừng cấm đỗ",
      date: "31/10/2020",
      stress: "Đường Trần phú,Quận hải châu",
      Processingunit: "Sở giao thông vận tải đà nẵng",
      typeVehicle: "Ô tô",
    },
    {
      id: "2",
      lat: "16.075300",
      lng: "108.223558",
      image: img,
      vehicle: "43A-11492",
      type: "Dừng xe nơi cấm dừng cấm đỗ",
      date: "31/10/2020",
      stress: "Đường Trần phú,Quận hải châu",
      Processingunit: "Sở giao thông vận tải đà nẵng",
      path: [
        { lat: 16.07274532559629, lng: 108.20999447459961 },
        { lat: 16.072785919075752, lng: 108.21019195223833 },
        { lat: 16.072844398302305, lng: 108.21046420748551 },
        { lat: 16.072906577169032, lng: 108.2107622679623 },
        { lat: 16.072962956953667, lng: 108.21102914775928 },
        { lat: 16.0730054834092, lng: 108.2112279665025 },
        { lat: 16.07305090938575, lng: 108.21144723708947 },
        { lat: 16.07311212167817, lng: 108.21175133253654 },
        { lat: 16.073168179234703, lng: 108.21201653595288 },
        { lat: 16.07322359243598, lng: 108.2122901212724 },
        { lat: 16.073295436272762, lng: 108.21267099495252 },
        { lat: 16.07333345228353, lng: 108.2128667962106 },
        { lat: 16.073420438043527, lng: 108.21321146006902 },
        { lat: 16.07345072196587, lng: 108.21333249475082 },
        { lat: 16.07347101863463, lng: 108.21348806287368 },
        { lat: 16.073486804931125, lng: 108.21359602178653 },
        { lat: 16.073515477997063, lng: 108.21377237702926 },
        { lat: 16.07353931852066, lng: 108.21391319300254 },
        { lat: 16.073554138304157, lng: 108.21399600620587 },
        { lat: 16.073617527083105, lng: 108.21430777213503 },
      ],
    },
  ];
  const itemActive = (e, historyRow) => {
    props.showInfowindow(historyRow);
  };
  const onChangePagination=(e,page)=>{
    props.getSearchViolation(page)
  }
  return (
    <>
      <div
        className={classes.tableWraper}
        style={{
          flex: 1,
          overflowY: "scroll",
        }}
      >
        <Table stickyHeader className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"><Typography className={classes.tabletitle}> Ảnh </Typography></TableCell>
              <TableCell align="center"> <Typography className={classes.tabletitle}> Biển số </Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tabletitle}>Lỗi vi phạm </Typography></TableCell>
              <TableCell align="center"> <Typography className={classes.tabletitle}>Tuyến đường vi phạm </Typography></TableCell>
            </TableRow>
          </TableHead>
          {props.vehicle.data?.length ? (
            props.vehicle.data.map((historyRow) => (
              <TableBody>
                <TableRow
                  onClick={(e) => itemActive(e, historyRow)}
                  className={
                    props.Infowindow.id === historyRow.id
                      ? classes.tablerow
                      : classes.untablerow
                  }
                >
                  <TableCell align="center" className={classes.tablecell}>
                    <img
                      src={historyRow.avatar}
                      className={classes.imagepopup}
                    ></img>
                  </TableCell>
                  <TableCell align="left">
                    <b className={classes.font}>{historyRow.numberPlate}</b>

                    <Typography
                      variant="body1"
                      color="textSecondary"
                      className={classes.colorfont}
                    >
                      {" "}
                      {historyRow.vehicleType}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography className={classes.font}>
                      {historyRow.type}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      className={classes.colorfont}
                    >
                      {historyRow.date}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography className={classes.font}>
                      {historyRow.address}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))
          ) : (
            <div className={classes.icongif}>
              {" "}
              <img src={LogoData} className={classes.imggif}></img>
            </div>
          )}
        </Table>
      </div>
      {props.vehicle.data?.length ?(
         <div className={classes.pagination}>
         <Pagination
           count={5}
           showFirstButton
           showLastButton
           onChange={(e,page)=>onChangePagination(e,page)}
           siblingCount={1}
         />
       </div>
      ):null}
    </>
  );
}

export default HeaderTable;

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
    // [theme.breakpoints.down('sm')]: {
    //   // backgroundColor: 'red',
    //   width:'80%'
    // },
  },
  tableWraper:{
    overflowX:"auto",
  },
  pagination: {
    width: "100%",
    display: "flex",
    padding: "10px 0",
    justifyContent: "center",
    boxShadow: "5px 2px 6px 3px #bbbbbb78",
  },
  tablerow: {
    background: "#00000014",
    // display: 'flex',
    cursor: "pointer",
    // marginBottom: 5,
  },
  tabletitle:{
    fontFamily: "Nunito, sans-serif",
    fontSize: 16,
  },
  untablerow: {
    cursor: "pointer",
  },
  imagepopup: {
    width: 130,
    height: 100,
  },
  font: {
    fontFamily: "Nunito, sans-serif",
    // fontSize: 16,
  },
  colorfont: {
    fontSize: 14,
    // color
  },
  tablecell: {
    padding: 0,
  },
  icongif: {
    width: 100,
  },
  imggif: {
    width: 500,
    marginTop: 100,
    marginLeft: 100,
  },
}));
