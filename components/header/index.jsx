import React from "react";
import { makeStyles, Paper, Typography, Button } from "@material-ui/core";
import img from "../../public/assets/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
let backgroundActive = "linear-gradient(45deg, #E91E63, #202e7d)";
const ManageNavbar = (props) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Paper square className={classes.header}>
      <img src={img}></img>
      <div className={classes.menu}>
        <div
          className={
            router.pathname == "/map" ? classes.active : classes.button
          }
        >
          <a
            className={
              router.pathname == "/map" ? classes.linkactive : classes.link
            }
            href="/map"
          >
            Bản Đồ
          </a>
        </div>
        <div
          className={
            router.pathname == "/violation" ? classes.active : classes.button
          }
        >
          <a
            href="/violation"
            className={
              router.pathname == "/violation"
                ? classes.linkactive
                : classes.link
            }
          >
            Vi Phạm
          </a>
        </div>
        <div
          className={router.pathname == "/" ? classes.active : classes.button}
        >
          <a href="/violation" className={classes.link}>
            Tin Tức
          </a>
        </div>
      </div>
    </Paper>
  );
};

export default ManageNavbar;
const useStyles = makeStyles((theme) => ({
  header: {
    height: 70,
    zIndex: 1,
    color: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 50px",
    top: 0,
    width: "100%",
    background: "#fafafa",
    animation: "$header .5s ease-in-out",
    boxShadow:
      "0 1px 6px rgba(0, 0, 0, 0.07), 0 2px 2px rgba(0, 0, 0, 0), 0 2px 6px rgba(0, 0, 0, 0.22), 0 8px 16px rgba(0, 0, 0, 0), 0 16px 32px rgba(0, 0, 0, 0), 0 32px 64px rgba(0, 0, 0, 0)",
  },

  "@keyframes header": {
    from: { top: -70 },
    to: { top: 0 },
  },

  link: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "#1b5bd4",
    },
  },
  linkactive: {
    color: "#1b5bd4",
    textDecoration: "none",
    "&:hover": {
      color: "#1b5bd4",
    },
  },
  menu: {
    display: "flex",
  },
  button: {
    position: "relative",
    color: "black",
    textTransform: "capitalize",
    padding: "8px 16px",
    transition: ".3s ease-in-out",
    marginRight: 22,
    textDecoration: "none",
    textAlign: "center",
    fontSize: 18,
    borderRadius: 4,

    "&::after": {
      content: '""',
      position: "absolute",
      width: 0,
      height: 3,
      background: "#1b5bd4",
      bottom: 0,
      left: 0,
      opacity: 0,
      transition: ".2s ease-in-out",
      visibility: "hidden",
    },

    "&:hover:after": {
      opacity: 1,
      visibility: "visible",
      width: "100%",
    },
    "&:hover": {
      background: "rgba(0, 0, 0, 0.04)",
      color: "#1b5bd4",
    },
  },
  active: {
    background: "rgba(0, 0, 0, 0.04)",
    color: "#1b5bd4",
    position: "relative",
    color: "black",
    textTransform: "capitalize",
    padding: "8px 16px",
    transition: ".3s ease-in-out",
    marginRight: 22,
    textDecoration: "none",
    textAlign: "center",
    fontSize: 18,
    borderRadius: 4,

    "&::after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: 3,
      background: "#1b5bd4",
      bottom: 0,
      left: 0,
      opacity: 1,
      transition: ".2s ease-in-out",
      // visibility: "hidden",
    },
  },
  title: {
    fontWeight: 500,
    textTransform: "uppercase",
    fontSize: 18,
  },
}));
