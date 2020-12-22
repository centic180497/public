import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import DoneIcon from "@material-ui/icons/Done";
import searchsitemap from "../../../public/assets/searchsitemap.png";
import violation2 from "../../../public/assets/violation2.png";
export default function SearchSiteMap(props) {
  const classes = useStyles();
  const ref = useRef({});
  return (
    <div className={classes.root}>
      <div className={classes.titleWraper}>
        <Typography className={classes.title}> TÍNH NĂNG NỔI BẬT</Typography>
        <Typography variant="h5"> TRA CỨU BẢN ĐỒ VI PHẠM</Typography>
      </div>
      <div className={classes.sitemap}>
        <div className={classes.sitemapsearch}>
          <div className={classes.tittlesitemap}>
            <Typography className={classes.title}>
              {" "}
              Tích hợp bản đồ giúp bạn xem vị trí bãi đỗ trực quan
            </Typography>
            <Typography variant="subtitle1">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi nec
              cras est ac in nunc sociis egestas. Elementum vel, porttitor et
              viverra felis. Non proin massa sit praesent nisl. Risus laoreet eu
              dignissim lorem sem accumsan elit.
            </Typography>
          </div>
        </div>
        <div className={classes.violation}>
          <img src={searchsitemap} className={classes.imageViolation}></img>
        </div>
      </div>
      <div className={classes.sitemap}>
        <div className={classes.sitemapsearch}>
          <img src={violation2} className={classes.imageViolation2}></img>
        </div>
        <div className={classes.violation}>
          <div className={classes.titleViolation}>
            <Typography className={classes.title}>
              {" "}
              Tích hợp bản đồ giúp bạn xem vị trí bãi đỗ trực quan
            </Typography>
            <Typography variant="subtitle1">
              {" "}
              Once a guest checks in, we can send your money by Paypal, direct
              deposit, or other available methods.
            </Typography>
            <div className={classes.checkbox}>
            <div className={classes.checkviolation}>
              <Typography variant="subtitle1">
                <DoneIcon className={classes.iconcheck} /> Chính xác
              </Typography>
              <Typography variant="subtitle1">
                <DoneIcon className={classes.iconcheck} />
                Tiện lợi
              </Typography>
              <Typography variant="subtitle1">
                <DoneIcon className={classes.iconcheck} /> Rõ ràng
              </Typography>
            </div>
            <div className={classes.free}>
              <Typography variant="subtitle1">
                <DoneIcon className={classes.iconcheck} /> Miễn phí
              </Typography>
              <Typography variant="subtitle1">
                <DoneIcon className={classes.iconcheck} /> Nhanh chóng
              </Typography>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 50px",
    marginTop: 84,
  },
  titleWraper: {
    textAlign: "center",
  },
  title: {
    color: "#0055A7",
  },
  sitemap: {
    display: "flex",
    flex: "1 1 auto",
    marginTop: 20,
  },
  sitemapsearch: {
    width: "50%",
  },
  tittlesitemap: {
    width: "40%",
    paddingTop: 140,
    float: "right",
  },
  violation: {
    width: "50%",
  },
  imageViolation: {
    width: "50%",
  },
  imageViolation2: {
    width: "50%",
    float: "right",
  },
  titleViolation: {
    width: "40%",
    paddingTop: 140,
    marginLeft:50
  },
  checkbox:{
      display:'flex',
      flex:'1 1 auto'
  },
  free:{
      marginLeft:30
  },
  iconcheck:{
      borderRadius:'50%',
      color:'#0055A7',
      background:'white'
  }
}));
