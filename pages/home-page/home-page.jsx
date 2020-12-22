import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import ManageNavbar from "../../src/components/header";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import Typography from "@material-ui/core/Typography";
import Slider from "react-slick";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import image from "../../public/assets/slide.png";
import Map from "../../public/assets/Map.svg";
import Search from "../../public/assets/Search.svg";
import Phone from "../../public/assets/Phone.svg";
import SearchSiteMap from './search_violation'
import AppMobile from './app_public'
export default function HomePage(props) {
  const classes = useStyles();
  const ref = useRef({});
  const img = [image, image, image];
  const settings = {
    dots: true,
    speed: 600,
    slidesToShow: 1,
  };
  const next = () => {
    ref.current.slickPrev();
  };
  const prev = () => {
    ref.current.slickNext();
  };
  return (
    <div className={classes.root}>
      <div className={classes.slideHome} className={classes.slidercontent}>
        <ManageNavbar />
        <Slider {...settings} className={classes.slider} ref={ref}>
          {img.map((image, index) => (
            <div key={index}>
              <img
                className={classes.imgpopup}
                src={image}
                // onClick={() => openGallery("item1", index)}
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
      </div>
      <div className={classes.container}>
        <div className={classes.function}>
          <div className={classes.titleWraper}>
            <Typography className={classes.title}>
              {" "}
              TÍNH NĂNG NỔI BẬT
            </Typography>
            <Typography variant="h5"> ĐIỂM NỔI BẬT</Typography>
          </div>
          <div className={classes.sitemap}>
            <div className={classes.map}>
              <img src={Map} className={classes.img}></img>
              <div className={classes.titlemap}>
                <Typography variant="h6"> Bản đồ vị trí đỗ xe</Typography>
                <Typography variant="subtitle1">
                  {" "}
                  Cho bạn biết những vị trí mà bạn muốn đến đỗ xe và vị trí thu
                  phí cũng như không thu phí
                </Typography>
              </div>
            </div>
            <div className={classes.map}>
              <img src={Search} className={classes.img}></img>
              <div className={classes.titlemap}>
                <Typography variant="h6"> Tra cứu vi phạm</Typography>
                <Typography variant="subtitle1">
                  {" "}
                  Giúp bạn xem được lỗi vi phạm của bạn hoặc người thân vi phạm
                </Typography>
              </div>
            </div>
            <div className={classes.map}>
              <img src={Phone} className={classes.img}></img>
              <div className={classes.titlemap}>
                <Typography variant="h6"> Ứng dụng tiện lợi</Typography>
                <Typography variant="subtitle1">
                  {" "}
                  Giúp bạn xem được lỗi vi phạm của bạn hoặc người thân vi phạm
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <SearchSiteMap/>
        <AppMobile/>
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#F8FBFF",
  },
  imgpopup: {
    width: "100%",
    // height:245
    // maxHeight: 600,
    height: "100vh",
  },
  slidercontent: {
    width: "100%",
    position: "relative",
    "&:hover div:last-child": {
      opacity: 1,
    },
  },
  slider: {
    background: "rgba(0, 22, 44, 0.6)",
  },
  title: {
    color: "#0055A7",
  },
  slidebutton: {
    transition: "0.2s",
    position: "absolute",
    top: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    opacity: 0,
    height: 0,
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
      opacity: 1,
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
      opacity: 1,
      color: "black",
      backgroundColor: "white",
    },
  },
  iconbutton: {
    marginTop: 2,
    marginLeft: 2,
  },
  slideHome: {
    flex: "1 1 auto",
  },
  sitemap: {
    display: "flex",
    flex: "1 1 auto",
    justifyContent: "center",
    marginTop: 84,
  },
  titleWraper: {
    textAlign: "center",
  },
  function: {
    padding: "0 50px",
  },
  map: {
    width: "30%",
    height: 115,
    textAlign: "center",
  },
  img: {
    width: 80,
    height: 80,
    marginLeft: 30,
  },
}));
