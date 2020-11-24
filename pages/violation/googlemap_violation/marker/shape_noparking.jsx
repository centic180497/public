import React, { useRef } from "react";
import { Polyline, Circle, Polygon, InfoWindow } from "react-google-maps";
import Infowindow from "../custominfowindow";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Table from "@material-ui/core/Table";
import { TableHead, TableRow, TableCell, Checkbox } from "@material-ui/core";
import image from "../../../../public/assets/violation.jpg";
import Typography from "@material-ui/core/Typography";
import img from "../../../../public/assets/img.jpg";
function ShapeNoparking(props) {
  const classes = useStyles();

  return (
    <div>
      <Polyline
        path={props.marker.path}
        options={{
          strokeColor: props.marker.color,
          strokeWeight: 5,
        }}
      />
      {props.opendialog ? (
        <Dialog
          open={props.opendialog}
          onClose={props.handleClose}
          aria-labelledby="form-dialog-title"
          className={classes.dialog}
        >
          <DialogTitle id="form-dialog-title">Chi tiết vi phạm</DialogTitle>
          <Table className={classes.table} aria-label="simple table">
            {/* <TableHead> */}
            <TableRow>
              <TableCell align="center">
                <Typography variant="body1" className={classes.colorfont}>
                  Ảnh
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <img src={image} className={classes.imagepopup}></img>
                {props.marker.image}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                <Typography variant="body1" className={classes.colorfont}>
                  Loại vi phạm
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography variant="body1" className={classes.colorfont}>
                  {props.marker.type}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                <Typography variant="body1" className={classes.colorfont}>
                  Ngày vi phạm
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography variant="body1" className={classes.colorfont}>
                  {props.marker.date}
                </Typography>

                {/* {props.marker.image} */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                <Typography variant="body1" className={classes.colorfont}>
                  Tuyến đường vi phạm
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography variant="body1" className={classes.colorfont}>
                  {props.marker.stress}
                </Typography>

                {/* {props.marker.image} */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                <Typography variant="body1" className={classes.colorfont}>
                  Loại phương tiện
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography variant="body1" className={classes.colorfont}>
                  {props.marker.typeVehicle}
                </Typography>

                {/* {props.marker.image} */}
              </TableCell>
            </TableRow>
            {/* </TableHead> */}
          </Table>
        </Dialog>
      ) : null}
    </div>
  );
}
export default ShapeNoparking;
const useStyles = makeStyles(() => ({
  slider: {
    width: 450,
  },
  slidercontent: {
    width: "100%",
    position: "relative",
  },
  slidebutton: {
    transition: "0.2s",
    position: "absolute",
    top: "50%",
    width: "100%",
    display: "flex",
    height: "100%",
    justifyContent: "space-between",
    opacity: 0,
    "&:hover": {
      opacity: 1,
    },
  },
  imgpopup: {
    width: "450px",
    height: 350,
  },
  title: {
    fontWeight: 500,
    fontFamily: "Nunito, sans-serif",
  },
  dialog: {
    height: "100%",
    width: "100%",
  },
  imagepopup: {
    width: 350,
  },
  infotitlepopup: {
    cursor: "pointer",
    color: "#3c16ce",
    float: "right",
    marginTop: "-40px",
  },
  icon: {
    fontSize: 14,
    marginLeft: 5,
  },
  titlepopup: {
    padding: 20,
  },
  next: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    transition: "0.5s",
    color: "black",
    cursor: "pointer",
    border: "none",
    backgroundColor: "white",
  },
  prev: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    transition: "0.5s",
    color: "black",
    border: "none",
    cursor: "pointer",
    backgroundColor: "white",
  },
  iconbutton: {
    marginTop: 2,
    marginLeft: 2,
  },
  font: {
    fontFamily: "Nunito, sans-serif",
  },
  table: {
    height: "80%",
  },
  colorfont: {
    fontSize: 14,
    fontFamily: "Nunito, sans-serif",
  },
}));
