import React, { useState, useRef } from "react";
import { Marker, InfoWindow } from "react-google-maps";
import iconmk from "../../../../public/assets/ic_parking.png";
import { makeStyles } from "@material-ui/core/styles";
import image from "../../../../public/assets/mX.png";
import img from "../../../../public/assets/img.jpg";
import Typography from "@material-ui/core/Typography";
// import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogActions from "@material-ui/core/DialogActions";
// import { TableHead, TableRow, TableCell, Checkbox } from "@material-ui/core";
// import TableContainer from "@material-ui/core/TableContainer";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import Button from "@material-ui/core/Button";
// import SendIcon from "@material-ui/icons/Send";
import Slider from "react-slick";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import {
  LightgalleryProvider,
  LightgalleryItem,
  withLightgallery,
  useLightgallery,
} from "react-lightgallery";
const OpenButtonWithHook = (props) => {
  const classes = useStyles();
  const ref = useRef({});
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

  const { openGallery } = useLightgallery();
  return (
    <>
      <Slider {...settings} className={classes.slider} ref={ref}>
        {props.marker.images.map((image, index) => (
          <div>
            <img
              className={classes.imgpopup}
              src={image}
              onClick={() => openGallery("item1")}
            ></img>
          </div>
        ))}
      </Slider>
      <div class={classes.slidebutton}>
        <div className={classes.next} onClick={() => next()}>
          <NavigateBeforeIcon className={classes.iconbutton} />
        </div>
        <div className={classes.prev} onClick={() => prev()}>
          <NavigateNextIcon className={classes.iconbutton} />
        </div>
      </div>
    </>
  );
};

function MarkerComponent(props) {
  var iconmarker = {
    url: image,
    scaledSize: new window.google.maps.Size(40, 45),
  };
  const classes = useStyles();
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
  const [opacity, setOpacity] = useState(0);
  const time= new Date(props.marker.createdAt).getDate()+'-'+ new Date(props.marker.createdAt).getMonth()+'-'+new Date(props.marker.createdAt).getFullYear()
  
  
  return (
    <Marker
      position={{
        lat: parseFloat(props.marker.camera.lat),
        lng: parseFloat(props.marker.camera.lng),
      }}
      icon={iconmarker}
    >
      {props.Infowindow === props.marker.id ? (
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
              <LightgalleryProvider>
                {props.marker.images.map((item) => (
                  <div
                    styles={{
                      maxWidth: "250px",
                      width: "100px",
                      padding: "5px",
                    }}
                  >
                    <LightgalleryItem
                      group="item1"
                      src={item}
                    ></LightgalleryItem>
                  </div>
                ))}
                <div className={classes.slidercontent} id="slider">
                  <OpenButtonWithHook marker={props.marker} />
                </div>
              </LightgalleryProvider>
            </div>
            <div className={classes.titlepopup}>
              <Typography variant="subtitle1" className={classes.font}>
                <b className={classes.title}>Tuyến đường:</b>
                {props.marker.address}
              </Typography>
              <Typography variant="subtitle1" className={classes.font}>
                <b className={classes.title}>Biển số:</b>
                {props.marker.numberPlate}
              </Typography>
              <Typography variant="subtitle1" className={classes.font}>
                <b className={classes.title}>Ngày vi phạm:</b>
                {time}
                {/* {props.marker.createdAt.getDate()} */}
              </Typography>
              <div onClick={() => dialogtable()}></div>
            </div>
          </div>
        </InfoWindow>
      ) : null}
    </Marker>
  );
}
export default MarkerComponent;
const useStyles = makeStyles((theme) => ({
  Info: {
    cursor: "pointer",
  },
  slider: {
    width: 450,
  },
  slidercontent: {
    width: "100%",
    position: "relative",
    "&:hover div:last-child": {
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
    opacity: 0,
    height:0
  },
  imgpopup: {
    width: "100%",
    // height:245
    height:'auto'
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
