import React from "react";
import {
  IconButton,
  Paper,
  InputBase,
  Divider,
  Typography,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Directions as DirectionsIcon,
  Pageview as PageviewIcon,
  Assignment as AssignmentIcon,
} from "@material-ui/icons";
import { green, pink } from "@material-ui/core/colors";

import Map from "../google_map";

const SiteMap = (props) => {
  const { getDataNoParking } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Map />
      <div className={classes.controlLeft}>
        <Paper component="form" className={classes.paper}>
          <IconButton className={classes.icon} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Tìm kiếm trên bản đồ"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            type="submit"
            className={classes.icon}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            color="primary"
            className={classes.icon}
            aria-label="directions"
          >
            <DirectionsIcon />
          </IconButton>
        </Paper>
        <Paper className={classes.boxSearch}>
          <Typography className={classes.titleSearch}>
            Tìm kiếm khu vực này
          </Typography>
          <div className={classes.listSearch}>
            <div className={classes.iconButton}>
              <Avatar className={classes.blue}>
                <PageviewIcon />
              </Avatar>
              <label>Bãi đỗ xe</label>
            </div>
            <div className={classes.iconButton}>
              <Avatar className={classes.red}>
                <AssignmentIcon />
              </Avatar>
              <label>Cấm đỗ xe</label>

            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default SiteMap;

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    position: "relative",
  },
  controlLeft: {
    position: "absolute",
    top: 10,
    left: 10,
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  icon: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  }, 
  boxSearch: {
    marginTop: 15,
    padding: 10,
    textAlign: "center",
  },
  listSearch: {
    display: "flex",
    justifyContent: "center",
    "& > *": {
      margin: 5,
    },
  },
  iconButton: {
    cursor:  'point',
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    padding: '10px 5px',
    transition: '.3s ease-in-out',
    '& label': {
        fontSize: 14,
        marginTop: 10
    },
    '&:hover': {
        background: '#c6c6c630'
    }
  },
 
  titleSearch: {
    fontWeight: 600,
  },
  blue: {
    backgroundColor: green[500],
  },
  red: {
    backgroundColor: pink[500],
  },
}));
