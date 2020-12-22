import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TableHead, TableRow, TableCell, Checkbox } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import { DataGrid } from "@material-ui/data-grid";
import { useDemoData } from "@material-ui/x-grid-data-generator";
import Pagination from "@material-ui/lab/Pagination";
import Typography from "@material-ui/core/Typography";
import LogoData from "../../../public/assets/edit.gif";
import { RequestStatus } from "../../../src/utils/constants";
import iconcar2 from "../../../public/assets/iconcar2.png";
// import { Scrollbars } from 'react-custom-scrollbars';

function HeaderTable(props) {
  const classes = useStyles();
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });
  const itemActive = (e, historyRow) => {
    props.showInfowindow(historyRow);
  };
  const onChangePagination = (e, page) => {
    const { plate } = props;
    props.getSearchViolation({ plate, page });
  };

  return (
    <>
      <div
        className={classes.tableWraper}
        style={{
          flex: 1,
          overflowY: "scroll",
        }}
      >
        {props.vehicle.data?.length ? (
          <Table
            stickyHeader
            className={classes.table}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  {" "}
                  <Typography className={classes.tabletitle}>
                    {" "}
                    Biển số{" "}
                  </Typography>
                </TableCell>

                <TableCell align="center">
                  {" "}
                  <Typography className={classes.tabletitle}>
                    Tuyến đường vi phạm{" "}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            {props.ButtonSearch
              ? props.vehicle.data.map((historyRow) => (
                  <TableBody>
                    <TableRow
                      onClick={(e) => itemActive(e, historyRow)}
                      className={
                        props.Infowindow.id === historyRow.id
                          ? classes.tablerow
                          : classes.untablerow
                      }
                    >
                      <TableCell align="center">
                        <div className={classes.typecar}>
                          <img src={iconcar2} className={classes.iconcar}></img>
                          <Typography
                            variant="h6"
                            className={classes.colorfont}
                          >
                            {historyRow.numberPlate}
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        <Typography className={classes.font}>
                          {historyRow.address}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                ))
              : null}
          </Table>
        ) : (
          <div className={classes.icongif}>
            {props.status === RequestStatus.STARTED ? null : (
              <img src={LogoData} className={classes.imggif}></img>
            )}
            {props.ButtonSearch && props.status === RequestStatus.FAILURE ? (
              <div>
                <Typography className={classes.titleSearch}>
                  Không tìm thấy kết quả tìm kiếm:{props.plate}
                </Typography>
              </div>
            ) : null}
          </div>
        )}
      </div>
      {props.vehicle.data?.length ? (
        <div className={classes.pagination}>
          <Pagination
            count={props.vehicle.total / props.vehicle.perPage}
            showFirstButton
            showLastButton
            onChange={(e, page) => onChangePagination(e, page)}
            siblingCount={1}
          />
        </div>
      ) : null}
    </>
  );
}

export default HeaderTable;

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
  },
  titleSearch: {
    color: "#6d6f71",
    fontFamily: "Nunito, sans-serif",
    fontSize: 18,
  },
  tableWraper: {
    overflowX: "auto",
  },
  pagination: {
    width: "100%",
    display: "flex",
    padding: "10px 0",
    justifyContent: "center",
    boxShadow: "5px 2px 6px 3px #bbbbbb78",
  },
  typecar: {
    display: "flex",
    justifyContent: "center",
  },
  iconcar: {
    width: 50,
    height: 50,
  },
  tablerow: {
    background: "#00000014",
    cursor: "pointer",
  },
  tabletitle: {
    fontFamily: "Nunito, sans-serif",
    fontSize: 16,
  },
  untablerow: {
    cursor: "pointer",
  },
  imagepopup: {
    width: 130,
    height: 100,
    marginLeft: -12,
    [theme.breakpoints.down("md")]: {
      width: 100,
      height: 70,
    },
  },
  font: {
    fontFamily: "Nunito, sans-serif",
  },
  colorfont: {
    fontSize: 14,
    marginTop: 18,
    marginLeft: 8,
  },
  tablecell: {
    padding: 0,
  },
  icongif: {
    textAlign: "center",
    marginTop: 100,
  },
  imggif: {
    width: 600,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));
