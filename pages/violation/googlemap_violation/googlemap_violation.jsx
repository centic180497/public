import React, { useRef, useEffect, useState } from "react";
import MapOptions from "../../../components/google_map_controlled";
import { makeStyles } from "@material-ui/core/styles";
// import MarkerComponent from "./marker";
import ReactDOM from "react-dom";
import { GoogleMap, InfoWindow } from "react-google-maps";
import ShapeNoparking from "../googlemap_violation/marker";
import CustomInfoWindow from "../googlemap_violation/custominfowindow";
import ReactDOMServer from "react-dom/server";
import Slider from "react-slick";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import image from "../../../public/assets/violation.jpg";
import img from "../../../public/assets/img.jpg";
import img2 from "../../../public/assets/doxechanle.jpg";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Table from "@material-ui/core/Table";
import { TableHead, TableRow, TableCell, Checkbox } from "@material-ui/core";
// import Lightbox from "react-image-lightbox";
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
        <div>
          <img
            className={classes.imgpopup}
            src={image}
            {...props}
            onClick={() => openGallery("item1")}
          ></img>
        </div>
        <div>
          <img
            className={classes.imgpopup}
            src={img}
            {...props}
            onClick={() => openGallery("item1")}
          ></img>
        </div>
        <div>
          <img
            className={classes.imgpopup}
            src={img2}
            {...props}
            onClick={() => openGallery("item1")}
          ></img>
        </div>
        {/* <OpenGallery222 classes={classes.imgpopup} image={image} /> */}
      </Slider>
      <div className={classes.slidebutton}>
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

function MapViolation(props) {
  // console.log(ref);
  // const { openGallery } = useLightgallery();
  const ref = useRef({});
  const lightbox = useRef();
  console.log(lightbox, "lightboxlightbox");

  const classes = useStyles();

  const vehicle = [
    {
      id: "1",
      path: [
        { lat: 16.081238661120641, lng: 108.16631503668134 },
        { lat: 16.073486130125332, lng: 108.18519778814701 },
      ],
      lat: "16.04319399907483",
      lng: "108.21515312158203",
      image: "",
      vehicle: "43A-11491",
      type: "Dừng xe nơi cấm dừng cấm đỗ",
      date: "31/10/2020",
      stress: "Đường Trần phú,Quận hải châu",
      Processingunit: "Sở giao thông vận tải đà nẵng",
      typeVehicle: "Ô tô",
      path: [
        { lat: 16.076374774161085, lng: 108.2139774107824 },
        { lat: 16.076052733066728, lng: 108.21375550832771 },
        { lat: 16.076374774161085, lng: 108.2139774107824 },
        { lat: 16.076052733066728, lng: 108.21375550832771 },
        { lat: 16.075806437660088, lng: 108.21356892716311 },
        { lat: 16.075754569000555, lng: 108.21352835875176 },
        { lat: 16.07553581841805, lng: 108.21334563326262 },
        { lat: 16.07551101163577, lng: 108.21332585197113 },
        { lat: 16.075346062563177, lng: 108.21320012342356 },
      ],
    },
    {
      id: "2",
      lat: "16.075300",
      lng: "108.223558",
      image: "",
      vehicle: "43A-11492",
      typeVehicle: "Ô tô",

      type: "Dừng xe nơi cấm dừng cấm đỗ",
      date: "31/10/2020",
      stress: "Đường Trần phú,Quận hải châu",
      Processingunit: "Sở giao thông vận tải đà nẵng",
      path: [
        { lat: 16.066145689229703, lng: 108.18494029608158 },
        { lat: 16.0621866873228, lng: 108.17953296270755 },
      ],
    },
    {
      id: "3",
      path: [
        { lat: 16.081238661120885, lng: 108.16631503668216 },
        { lat: 16.073486130125332, lng: 108.18519778814701 },
      ],
      lat: "16.077707",
      lng: "108.223231",
      image: "",
      vehicle: "43A-11493",
      type: "Dừng xe nơi cấm dừng cấm đỗ",
      date: "31/10/2020",
      stress: "Đường Trần phú,Quận hải châu",
      Processingunit: "Sở giao thông vận tải đà nẵng",
      typeVehicle: "Ô tô",
    },
    {
      id: "4",
      path: [
        { lat: 16.06573329687323, lng: 108.20253558721927 },
        { lat: 16.054845829552328, lng: 108.20845790472416 },
      ],
      lat: "16.081844",
      lng: "108.222743",
      image: "",
      vehicle: "43A-11494",
      type: "Dừng xe nơi cấm dừng cấm đỗ",
      date: "31/10/2020",
      stress: "Đường Trần phú,Quận hải châu",
      Processingunit: "Sở giao thông vận tải đà nẵng",
      typeVehicle: "Ô tô",
    },
    // {
    //   path: [
    //     { lat: 16.066145689229703, lng: 108.18494029608158 },
    //     { lat: 16.0621866873228, lng: 108.17953296270755 },
    //   ],
    //   lat: "16.074250",
    //   lng: "108.223653",
    //   image: "",
    //   vehicle: "43A-11495",
    //   type: "Dừng xe nơi cấm dừng cấm đỗ",
    //   date: "31/10/2020",
    //   stress: "Đường Trần phú,Quận hải châu",
    //   Processingunit: "Sở giao thông vận tải đà nẵng",
    //   typeVehicle: "Ô tô",
    // },
  ];
  const [map, setMap] = useState(null);
  const shapeRef = useRef(null);
  const [infoWindowShape, setInfoWindowShape] = useState(null);
  const [opacity, setOpacity] = useState(0);
  const [openImage, setOpenImage] = useState(true);
  const [opendialog, setOpendialog] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  // const { openGallery } = useLightgallery()

  const images = [
    "https://images.unsplash.com/photo-1594818898109-44704fb548f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1594818896795-35ad7bcf3c6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1594818896744-57eca4d47b07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1594818897077-aec41f55241f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
  ];

  useEffect(() => {
    let value = vehicle.filter((data) => data.id === props.Infowindow.id);
    if (value.length) {
      let e = { ...value[0] };
      if (e.path.length % 2 !== 0) {
        let index = Math.ceil(e.path.length / 2);
        e.latLng = e.path[index];
      } else {
        let pointFirst;
        let pointLast;
        if (e.path.length < 3) {
          pointFirst = e.path[0];
          pointLast = e.path[1];
        } else {
          let i = e.path.length / 2;
          pointFirst = e.path[i];
          pointLast = e.path[i + 1];
        }
        let lat = (pointFirst.lat + pointLast.lat) / 2;
        let lng = (pointFirst.lng + pointLast.lng) / 2;

        e.latLng = { lat, lng };
      }
      showInfoWindowShape(e);
    }
  }, [props.Infowindow]);
  // const { openGallery } = useLightgallery();
  const clearInfoWindow = () => {
    if (infoWindowShape) {
      infoWindowShape.open(null);
    }
  };
  const handleClose = () => {
    setOpendialog(false);
  };
  // const next = () => {
  //   ref.current.slickPrev();
  // };
  // const prev = () => {
  //   ref.current.slickNext();
  // };

  const showInfoWindowShape = (e) => {
    clearInfoWindow();
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
    };
    // const { openGallery } = useLightgallery();
    // const { openGallery } = useLightgallery();
    const slide = (
      <React.Fragment>
        <LightgalleryProvider>
          {images.map((item) => (
            // <LightgalleryItem image={item}></LightgalleryItem>
            <div
              styles={{
                maxWidth: "250px",
                width: "100px",
                padding: "5px",
              }}
            >
              <LightgalleryItem group="item1" src={item}>
                {/* <img src={item} style={{ width: "100%" }} /> */}
              </LightgalleryItem>
            </div>
          ))}
          <div
            onMouseOver={() => {
              setOpacity(1);
            }}
            onMouseOut={() => {
              setOpacity(0);
            }}
            className={classes.slidercontent}
            id="slider"
          >
            <OpenButtonWithHook />
          </div>
        </LightgalleryProvider>
      </React.Fragment>
    );
    // const button = (
    //   <React.Fragment>
    //     <div onClick={() => dialogtable()} id="button">
    //       <Button
    //         variant="outlined"
    //         color="primary"
    //         className={classes.infotitlepopup}
    //       >
    //         chi tiết <SendIcon className={classes.icon} />
    //       </Button>
    //     </div>
    //   </React.Fragment>
    // );
    const Popup = <CustomInfoWindow info={e} />;
    let infoWindow = new window.google.maps.InfoWindow({
      content: ``,
    });

    if (map) {
      let content = ReactDOMServer.renderToString(Popup);

      infoWindow.setPosition(e.latLng);
      infoWindow.setContent(content);
      infoWindow.open(map);

      window.google.maps.event.addListener(infoWindow, "domready", function () {
        ReactDOM.render(
          React.Children.only(slide),
          document.getElementById("slide")
          // document.getElementById("button")
        );
      });
      // window.google.maps.event.addListener(infoWindow, "domready", function () {
      //   ReactDOM.render(
      //     React.Children.only(button),
      //     document.getElementById("button")
      //   );
      // });
      setInfoWindowShape(infoWindow);
    }
  };
  const dialogtable = () => {
    setOpendialog(true);
  };
  const mapEvent = (ref) => {
    if (ref) {
      setMap(ref.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
    }
  };
  const onChangeMapClick = () => {
    clearInfoWindow();
    props.clearInfowindow();
  };

  return (
    <MapOptions>
      <GoogleMap
        onClick={onChangeMapClick}
        zoom={13}
        defaultCenter={{ lat: 16.04319399907483, lng: 108.21515312158203 }}
        ref={mapEvent}
        // onClick={(e) => handleMap(e)}
      >
        {vehicle.length
          ? vehicle.map((marker, index) => {
              return (
                <ShapeNoparking
                  marker={marker}
                  key={index}
                  id={marker.id}
                  // ref={ref}
                  handleClose={() => handleClose()}
                  opendialog={opendialog}
                  shapeRef={shapeRef}
                />
                // <MarkerComponent
                //   marker={marker}
                //   key={index}
                //   // id={marker.id}
                //   lat={marker.lat}
                //   lng={marker.lng}
                // />
              );
            })
          : null}
      </GoogleMap>
    </MapOptions>
  );
}
export default MapViolation;
const useStyles = makeStyles(() => ({
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
    // height: "100%",
    justifyContent: "space-between",
    opacity: 0,
    // "&:hover": {
    //   opacity: 1,
    // },
  },
  imgpopup: {
    cursor: "pointer",
    width: "450px",
    height: 300,
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
}));
