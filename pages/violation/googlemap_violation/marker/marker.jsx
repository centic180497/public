import React, { useState, useRef } from "react";
import { Marker, InfoWindow } from "react-google-maps";
import iconmk from "../../../../public/assets/ic_parking.png";
import { makeStyles } from "@material-ui/core/styles";
import image from "../../../../public/assets/violation.jpg";
import img from "../../../../public/assets/img.jpg";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import { TableHead, TableRow, TableCell, Checkbox } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import Slider from "react-slick";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import Lightbox from "react-image-lightbox";

function MarkerComponent(props) {
  var iconmarker = {
    url: iconmk,
    scaledSize: new window.google.maps.Size(40, 40),
  };
  const classes = useStyles();
  const [opendialog, setOpendialog] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const[photoIndex,setPhotoIndex]=useState(0)
  const dialogtable = () => {
    setOpendialog(true);
  };
  const handleClose = () => {
    setOpendialog(false);
    setOpenImage(false);
  };
  const handleToggle = () => {
    props.clearInfowindow();
  };
  const ref = useRef({});
  console.log(ref);
  
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
  };
  const next = () => {
    ref.current.slickPrev();
  };
  const prev = () => {
    ref.current.slickNext();
  };
  const showImage = () => {

    setOpenImage(true);
  };
  const images = [
    {image:image},
    {image:img},
  ];

  const [opacity, setOpacity] = useState(0);
  return (
    <Marker
      position={{
        lat: parseFloat(props.marker.lat),
        lng: parseFloat(props.marker.lng),
      }}
      icon={iconmarker}
    >
      {props.Infowindow.lat === props.lat &&
      props.Infowindow.lng === props.lng ? (
        <InfoWindow onCloseClick={() => handleToggle()}>
          <div className={classes.Info}>
            <div
              onMouseOver={() => {
                setOpacity(1);
              }}
              onMouseOut={() => {
                setOpacity(0);
              }}
              className={classes.slidercontent}
            >
              <Slider {...settings} className={classes.slider} ref={ref}>
                <div onClick={() => showImage()}>
                  <img className={classes.imgpopup} src={image}></img>
                </div>
                <div>
                  <img className={classes.imgpopup} src={image}></img>
                </div>
                <div>
                  <img className={classes.imgpopup} src={image}></img>
                </div>
              </Slider>
              <div style={{ opacity: opacity }} class={classes.slidebutton}>
                <div className={classes.next} onClick={() => next()}>
                  <NavigateBeforeIcon className={classes.iconbutton} />
                </div>
                <div className={classes.prev} onClick={() => prev()}>
                  <NavigateNextIcon className={classes.iconbutton} />
                </div>
              </div>
            </div>
            <div className={classes.titlepopup}>
              <Typography variant="subtitle1" className={classes.font}>
                <b className={classes.title}>Tuyến đường:</b>
                {props.marker.stress}
              </Typography>
              <Typography variant="subtitle1" className={classes.font}>
                <b className={classes.title}>Biển số:</b>
                {props.marker.vehicle}
              </Typography>
              <Typography variant="subtitle1" className={classes.font}>
                <b className={classes.title}>Ngày vi phạm:</b>
                {props.marker.date}
              </Typography>
              <div
                //   className={classes.infotitlepopup}
                onClick={() => dialogtable()}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.infotitlepopup}
                >
                  chi tiết <SendIcon className={classes.icon} />
                </Button>
                {/* <a className={classes.infotitlepopup}>thông tin chi tiết...</a> */}
              </div>
            </div>
          </div>
        </InfoWindow>
      ) : null}
      {
          openImage?(
            <Lightbox
            mainSrc={images[photoIndex].image}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => (setOpenImage(false))}
            onMovePrevRequest={() =>
            
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
              }
            onMoveNextRequest={() =>
         
                setPhotoIndex((photoIndex + 1) % images.length)
              }
          />
          ):null
      }
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
                {/* {props.marker.image} */}
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
    </Marker>
  );
}
export default MarkerComponent;
const useStyles = makeStyles((theme) => ({
  Info: {},
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
