import React, { useRef, useEffect, useState } from "react";
import MapOptions from "../../../components/google_map_controlled";
import { makeStyles } from "@material-ui/core/styles";
import MarkerComponent from "../googlemap_violation/marker";
import ReactDOM from "react-dom";
import { GoogleMap, InfoWindow } from "react-google-maps";
import ShapeNoparking from "../googlemap_violation/marker/shape_noparking";
import clsx from "clsx";
import { TypeNoParkingOptions } from "../../../utils/constants";
import { Typography } from "@material-ui/core";
import {
  Timeline as TimelineIcon,
  LocalParking as LocalParkingIcon,
  ArrowRight as ArrowRightIcon,
  ArrowLeft as ArrowLeftIcon,
  Clear as ClearIcon,
  ChevronLeft as ChevronLeftIcon,
} from "@material-ui/icons";
// import Lightbox from "react-image-lightbox";
// import {
//   LightgalleryProvider,
//   LightgalleryItem,
//   withLightgallery,
//   useLightgallery,
// } from "react-lightgallery";

// const OpenButtonWithHook = (props) => {
//   const classes = useStyles();
//   const ref = useRef({});
//   const settings = {
//     dots: true,
//     speed: 500,
//     slidesToShow: 1,
//   };
//   const next = () => {
//     ref.current.slickPrev();
//   };
//   const prev = () => {
//     ref.current.slickNext();
//   };

//   const { openGallery } = useLightgallery();
//   return (
//     <>
//       <Slider {...settings} className={classes.slider} ref={ref}>
//         <div>
//           <img
//             className={classes.imgpopup}
//             src={image}
//             {...props}
//             onClick={() => openGallery("item1")}
//           ></img>
//         </div>
//         <div>
//           <img
//             className={classes.imgpopup}
//             src={img}
//             {...props}
//             onClick={() => openGallery("item1")}
//           ></img>
//         </div>
//         <div>
//           <img
//             className={classes.imgpopup}
//             src={img2}
//             {...props}
//             onClick={() => openGallery("item1")}
//           ></img>
//         </div>
//         {/* <OpenGallery222 classes={classes.imgpopup} image={image} /> */}
//       </Slider>
//       <div className={classes.slidebutton}>
//         <div className={classes.next} onClick={() => next()}>
//           <NavigateBeforeIcon className={classes.iconbutton} />
//         </div>
//         <div className={classes.prev} onClick={() => prev()}>
//           <NavigateNextIcon className={classes.iconbutton} />
//         </div>
//       </div>
//     </>
//   );
// };

function MapViolation(props) {
  const ref = useRef({});
  const lightbox = useRef();
  const classes = useStyles();
  const [map, setMap] = useState(null);
  const [infoWindowShape, setInfoWindowShape] = useState(null);
  // useEffect(() => {
  //   let value = props.noParking.filter((data) => data.id === props.Infowindow.id);
  //   console.log(value);

  //   if (value.length) {
  //     let e = { ...value[0] };
  //     console.log(e);

  //     if (e.path.length % 2 !== 0) {
  //       let index = Math.ceil(e.path.length / 2);
  //       e.latLng = e.path[index];
  //     } else {
  //       let pointFirst;
  //       let pointLast;
  //       if (e.path.length < 3) {
  //         pointFirst = e.path[0];
  //         pointLast = e.path[1];
  //       } else {
  //         let i = e.path.length / 2;
  //         pointFirst = e.path[i];
  //         pointLast = e.path[i + 1];
  //       }
  //       let lat = (pointFirst.lat + pointLast.lat) / 2;
  //       let lng = (pointFirst.lng + pointLast.lng) / 2;

  //       e.latLng = { lat, lng };
  //     }
  //     console.log(e);

  //     showInfoWindowShape(e);
  //   }
  // }, [props.Infowindow]);
  // const { openGallery } = useLightgallery();
  // const clearInfoWindow = () => {
  //   if (infoWindowShape) {
  //     infoWindowShape.open(null);
  //   }
  // };
  // const handleClose = () => {
  //   setOpendialog(false);
  // };
  // const next = () => {
  //   ref.current.slickPrev();
  // };
  // const prev = () => {
  //   ref.current.slickNext();
  // };

  // const showInfoWindowShape = (e) => {
  //   clearInfoWindow();
  //   const settings = {
  //     dots: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //   };
  //   // const { openGallery } = useLightgallery();
  //   // const { openGallery } = useLightgallery();
  //   const slide = (
  //     <React.Fragment>
  //       <LightgalleryProvider>
  //         {images.map((item) => (
  //           // <LightgalleryItem image={item}></LightgalleryItem>
  //           <div
  //             styles={{
  //               maxWidth: "250px",
  //               width: "100px",
  //               padding: "5px",
  //             }}
  //           >
  //             <LightgalleryItem group="item1" src={item}>
  //               {/* <img src={item} style={{ width: "100%" }} /> */}
  //             </LightgalleryItem>
  //           </div>
  //         ))}
  //         <div
  //           onMouseOver={() => {
  //             setOpacity(1);
  //           }}
  //           onMouseOut={() => {
  //             setOpacity(0);
  //           }}
  //           className={classes.slidercontent}
  //           id="slider"
  //         >
  //           <OpenButtonWithHook />
  //         </div>
  //       </LightgalleryProvider>
  //     </React.Fragment>
  //   );
  //   // const button = (
  //   //   <React.Fragment>
  //   //     <div onClick={() => dialogtable()} id="button">
  //   //       <Button
  //   //         variant="outlined"
  //   //         color="primary"
  //   //         className={classes.infotitlepopup}
  //   //       >
  //   //         chi tiết <SendIcon className={classes.icon} />
  //   //       </Button>
  //   //     </div>
  //   //   </React.Fragment>
  //   // );
  //   const Popup = <CustomInfoWindow info={e} />;
  //   let infoWindow = new window.google.maps.InfoWindow({
  //     content: ``,
  //   });

  //   if (map) {
  //     let content = ReactDOMServer.renderToString(Popup);

  //     infoWindow.setPosition(e.latLng);
  //     infoWindow.setContent(content);
  //     infoWindow.open(map);

  //     window.google.maps.event.addListener(infoWindow, "domready", function () {
  //       ReactDOM.render(
  //         React.Children.only(slide),
  //         document.getElementById("slide")
  //         // document.getElementById("button")
  //       );
  //     });
  //     // window.google.maps.event.addListener(infoWindow, "domready", function () {
  //     //   ReactDOM.render(
  //     //     React.Children.only(button),
  //     //     document.getElementById("button")
  //     //   );
  //     // });
  //     setInfoWindowShape(infoWindow);
  //   }
  // };
  // const mapEvent = (ref) => {
  //   if (ref) {
  //     setMap(ref.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
  //   }
  // };
  const onChangeMapClick = () => {
    // clearInfoWindow();
    props.clearInfowindow();
  };
  const handleHideBoxNote = () => {
    props.toggleBoxNote();
  };

  return (
    <MapOptions>
      <GoogleMap
        onClick={onChangeMapClick}
        zoom={13}
        defaultCenter={{ lat: 16.04319399907483, lng: 108.21515312158203 }}
        // ref={mapEvent}
        // onClick={(e) => handleMap(e)}
      >
        {props.noParking?.length
          ? props.noParking.map((marker, index) => {
              return (
                <ShapeNoparking
                  marker={marker}
                  key={index}
                  id={marker.id}
                  ref={ref}
                  handleClose={() => handleClose()}
                />
              );
            })
          : null}
        {props.vehicle.data?.length > 0
          ? props.vehicle.data.map((marker, index) => {
              return (
                <>
                  <MarkerComponent
                    marker={marker}
                    key={index}
                    // id={marker.id}
                    lat={marker.camera.lat}
                    lng={marker.camera.lng}
                  />
                </>
              );
            })
          : null}
      </GoogleMap>
      {props.noParking?.length && (
        <div className={classes.note}>
          <span
            className={clsx(classes.toggleNote, {
              [classes.toggleNoteHide]: !props.openNote,
            })}
            onClick={handleHideBoxNote}
          >
            {props.openNote ? <ClearIcon /> : <ChevronLeftIcon />}
          </span>
          <ul
            className={clsx({
              [classes.boxNoteHide]: !props.openNote,
              [classes.boxNote]: props.openNote,
            })}
          >
            <Typography className={classes.title}>Chú thích</Typography>
            {TypeNoParkingOptions.map((data) => {
              return (
                <li key={data.id}>
                  <TimelineIcon style={{ color: data.color }} />
                  <span>{data.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </MapOptions>
  );
}
export default MapViolation;
const useStyles = makeStyles(() => ({
  // slider: {
  //   width: 450,
  // },
  // slidercontent: {
  //   width: "100%",
  //   position: "relative",
  //   "&:hover div:last-child": {
  //     opacity: 1,
  //   },
  // },
  // slidebutton: {
  //   transition: "0.2s",
  //   position: "absolute",
  //   top: "50%",
  //   width: "100%",
  //   display: "flex",
  //   justifyContent: "space-between",
  //   opacity: 0,
  // },
  // imgpopup: {
  //   cursor: "pointer",
  //   width: "450px",
  //   height: 300,
  // },
  title: {
    fontWeight: 500,
    fontFamily: "Nunito, sans-serif",
  },
  // dialog: {
  //   height: "100%",
  //   width: "100%",
  // },
  // imagepopup: {
  //   width: 350,
  // },
  // infotitlepopup: {
  //   cursor: "pointer",
  //   color: "#3c16ce",
  //   float: "right",
  //   marginTop: "-40px",
  // },
  // icon: {
  //   fontSize: 14,
  //   marginLeft: 5,
  // },
  // titlepopup: {
  //   padding: 20,
  // },
  // next: {
  //   width: 30,
  //   height: 30,
  //   borderRadius: "50%",
  //   transition: "0.5s",
  //   color: "black",
  //   cursor: "pointer",
  //   border: "none",
  //   backgroundColor: "white",
  // },
  // prev: {
  //   width: 30,
  //   height: 30,
  //   borderRadius: "50%",
  //   transition: "0.5s",
  //   color: "black",
  //   border: "none",
  //   cursor: "pointer",
  //   backgroundColor: "white",
  // },
  // iconbutton: {
  //   marginTop: 2,
  //   marginLeft: 2,
  // },
  // font: {
  //   fontFamily: "Nunito, sans-serif",
  // },
  //note
  note: {
    position: "absolute",
    top: "50%",
    right: 10,
    transform: "translateY(-50%)",
    "& ul": {
      padding: 10,
      listStyle: "none",
      margin: 0,
      background: "#fafafa",
      transition: ".3s ease-in-out",
      borderRadius: 4,
      position: "relative",
      boxShadow:
        "0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)",
      "& li": {
        display: "flex",
        alignItems: "center",
        lineHeight: "35px",
        "& span": {
          marginLeft: 8,
        },
      },
    },
  },
  toggleNote: {
    background: "#fafafa",
    position: "absolute",
    top: 4,
    right: 4,
    width: 40,
    height: 40,
    textAlign: "center",
    color: "grey",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 1,
    alignItems: "center",
    borderRadius: "50%",
  },
  toggleNoteHide: {
    boxShadow: "-1px -5px 5px #504e4e57",
  },
  boxNoteHide: {
    display: "none",
  },

  boxNote: {
    display: "block",
  },
}));
