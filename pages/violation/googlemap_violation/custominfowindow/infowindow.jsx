import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography } from "@material-ui/core";
import Slider from "react-slick";
import SendIcon from "@material-ui/icons/Send";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import image from "../../../../public/assets/violation.jpg";
import img from "../../../../public/assets/img.jpg";

function Infowindow(props) {
  const classes = useStyles();
  const ref = useRef({});

  const [opendialog, setOpendialog] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const next = () => {
    ref.current.slickPrev();
    // console.log("ref,ref",ref);
  };
  const prev = () => {
    ref.current.slickNext();
  };
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
  };
  const dialogtable = () => {
    //   console.log("vaoffafaf");

    setOpendialog(true);
  };
  console.log(props.opacity);

  return (
    <div className={classes.Info}>
      <div
        id="slide"
        //   onMouseOver={() => {
        //     console.log("vaf vafo");

        //     setOpacity(1);
        //   }}
        //   onMouseOut={() => {
        //     setOpacity(0);
        //   }}
        className={classes.slidercontent}
      >
        {/* <Slider {...settings} className={classes.slider} ref={ref}>
                <div onClick={() => showImage()}>
                  <img className={classes.imgpopup} src={image}></img>
                </div>
                <div>
                  <img className={classes.imgpopup} src={img}></img>
                </div>
                <div>
                  <img className={classes.imgpopup} src={image}></img>
                </div>
              </Slider> */}
        <div
          style={{ opacity: props.opacity }}
          className={classes.slidebutton}
          id="slidebutton"
        ></div>
      </div>
      <div className={classes.titlepopup}>
        <Typography variant="subtitle1" className={classes.font}>
          <b className={classes.title}>Tuyến đường:</b>
          {props.info.stress}
        </Typography>
        <Typography variant="subtitle1" className={classes.font}>
          <b className={classes.title}>Biển số:</b>
          {props.info.vehicle}
        </Typography>
        <Typography variant="subtitle1" className={classes.font}>
          <b className={classes.title}>Ngày vi phạm:</b>
          {props.info.date}
        </Typography>
        <div
          //   className={classes.infotitlepopup}
          onClick={() => dialogtable()}
          id="button"
        >
          {/* <Button
                  variant="outlined"
                  color="primary"
                  className={classes.infotitlepopup}
                >
                  chi tiết <SendIcon className={classes.icon} />
                </Button> */}
          {/* <a className={classes.infotitlepopup}>thông tin chi tiết...</a> */}
        </div>
      </div>
      {opendialog ? (
        <Dialog
          open={opendialog}
          onClose={() => handleClose()}
          aria-labelledby="form-dialog-title"
          className={classes.dialog}
        >
          <DialogTitle id="form-dialog-title">Chi tiết vi phạm</DialogTitle>
          <Table className={classes.table} aria-label="simple table">
            {/* <TableHead> */}
            <TableRow>
              <TableCell align="center"> Ảnh </TableCell>
              <TableCell component="th" scope="row">
                <img src={image} className={classes.imagepopup}></img>
                {props.marker.image}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center"> Loại vi phạm </TableCell>
              <TableCell component="th" scope="row">
                {props.marker.type}
                {/* {props.marker.image} */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center"> Ngày vi phạm </TableCell>
              <TableCell component="th" scope="row">
                {props.marker.date}
                {/* {props.marker.image} */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center"> Tuyến đường vi phạm </TableCell>
              <TableCell component="th" scope="row">
                {props.marker.stress}
                {/* {props.marker.image} */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center"> Loại phương tiện </TableCell>
              <TableCell component="th" scope="row">
                {props.marker.typeVehicle}
                {/* {props.marker.image} */}
              </TableCell>
            </TableRow>
            {/* </TableHead> */}
          </Table>
          {/* <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                Subscribe
              </Button>
            </DialogActions> */}
        </Dialog>
      ) : null}
    </div>
  );
}
export default Infowindow;
const useStyles = makeStyles(() => ({
  slider: {
    width: 450,
  },
  slidercontent: {
    width: "100%",
    position: "relative",
    "&:hover slidebutton": {
      opacity: 1,
    },
  },
  slidebutton: {
    transition: "0.2s",
    position: "absolute",
    top: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  imgpopup: {
    width: "450px",
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
    "&:hover": {
      color: "black",
      backgroundColor: "white",
    },
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
    "&:hover": {
      color: "black",
      backgroundColor: "white",
    },
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
}));
