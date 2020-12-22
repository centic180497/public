import React from "react";
import { makeStyles, Paper, Typography, Button } from "@material-ui/core";
import img from "../../../public/assets/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavType } from "../../utils/constants";
import clsx from "clsx";
import { route } from "next/dist/next-server/server/router";
let backgroundActive = "linear-gradient(45deg, #E91E63, #202e7d)";
const ManageNavbar = (props) => {
  const classes = useStyles();
  const router = useRouter();
  console.log(router);
  const handleClick = (e, href) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <Paper square className={classes.header}>
      <img src={img}></img>
      <div className={classes.menu}>
        {NavType.map((data) => {
          return (
            <a
              href={data.href}
              onClick={(e) => handleClick(e, data.href)}
              className={clsx(classes.button, {
                [classes.buttonActive]: router.pathname === data.href,
              })}
              key={data.id}
            >
              {data.name}
            </a>
          );
        })}
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
    boxShadow:
      "0 1px 6px rgba(0, 0, 0, 0.07), 0 2px 2px rgba(0, 0, 0, 0), 0 2px 6px rgba(0, 0, 0, 0.22), 0 8px 16px rgba(0, 0, 0, 0), 0 16px 32px rgba(0, 0, 0, 0), 0 32px 64px rgba(0, 0, 0, 0)",
  },

  button: {
    position: "relative",
    color: "black",
    textTransform: "capitalize",
    padding: "8px 16px",
    transition: ".3s ease-in-out",
    marginRight: 22,
    textDecoration: "none",
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
  buttonActive: {
    background: "rgba(0, 0, 0, 0.04)",
    color: "#1b5bd4",
    "&:after": {
      visibility: "visible",
      opacity: 1,
      width: "100%",
    },
  },

  title: {
    fontWeight: 500,
    textTransform: "uppercase",
    fontSize: 18,
  },
}));
