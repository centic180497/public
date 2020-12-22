import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import backgroundimg from "../../../public/assets/caurong.png";
import smartphone from "../../../public/assets/smartphone.png";
export default function AppMobile(props) {
  const classes = useStyles();
  const ref = useRef({});
  return (
    <div className={classes.root}>
      <div className={classes.bgimages}>
        <div className={classes.appmobile}>
          <div className={classes.doawload}>
            <div className={classes.titlemap}>
              <Typography variant="subtitle1" className={classes.titlemobile}>
                {" "}
                Ứng dụng Bãi Đỗ Xe
              </Typography>
              <Typography variant="h5" className={classes.titlemobile}>
                {" "}
                DOAWLOAD ỨNG DỤNG CỦA CHÚNG TÔI
              </Typography>
              <Typography variant="subtitle1" className={classes.titlemobile}>
                {" "}
                Ứng dụng của chúng tôi giúp bạn có thể dễ dàng theo dõi vị trí đỗ xe 1 cách dễ dàng
              </Typography>
            </div>
          </div>
          <div className={classes.mobile}>
            <img src={smartphone} className={classes.smarphone}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    height: 600,
    // background: "#F8FBFF",
    // backgroundImage: `url(${backgroundimg})`
  },
  bgimages: {
      background:'#0055A7',
    backgroundImage: `url(${backgroundimg})`,
    width: "100%",
    height: "100%",
  },
  appmobile: {
    padding: "0 50px",
    display: "flex",
  },
  doawload: {
    width: "50%",
  },
  mobile: {
    width: "50%",
  },
  smarphone: {
    width: "70%",
  },
  titlemobile:{
      color:'white'
  }
}));
