import React, { useState } from "react";
import { makeStyles, Button, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
// import SendIcon from '@material-ui/icons/Send';
import SearchSharpIcon from "@material-ui/icons/SearchSharp";

function SearchTable(props) {
  const classes = useStyles();
  const vehicle = [{ name: "Xe máy" }, { name: "Ô tô" }];
  const vehicle1 = [{ name: "Trần Phú" }, { name: "Bạch Đằng" }];
  const [handleInput, setHandleInput] = useState('');
  const hanleInputChange = (e) => {
    // console.log(e);
    setHandleInput(e.target.value);
  };
  const clickSearch = () => {
    if(handleInput===''){
      props.ClearDataInputSearch()
    }else{
      props.getDataInputSearch(handleInput)
      props.getSearchViolation(handleInput);
    }
  };
  const handleEnter = (e) => {

    // console.log(e,"eeeee");
    if (e.key === "Enter" && handleInput!='') {
      props.getDataInputSearch(handleInput)
      props.getSearchViolation(handleInput);
    }else if(e.key === "Enter" && handleInput===''){
      console.log('fsdfsd');
      
      props.ClearDataInputSearch()
    }
  };
  return (
    <div className={classes.search}>
      <div className={classes.searchText}>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          label="Nhập biển số"
          className={classes.bodertext}
          onChange={(e) => hanleInputChange(e)}
          onKeyDown={(e) => handleEnter(e)}
        />
        <Button
          variant="outlined"
          onClick={() => clickSearch()}
          // color="primary"
          className={classes.infotitlepopup}
        >
          <SearchSharpIcon className={classes.icon} />
        </Button>
      </div>
    </div>
  );
}

export default SearchTable;

const useStyles = makeStyles((theme) => ({
  search: {
    // display: "flex",
    padding: 20,
    // background: "#e8dbdb1c",
  },
  searchauto: {
    width: "100%",
    display: "flex",
    paddingTop: 15,
  },
  searchText: {
    width: "100%",
    display: "flex",
  },
  button: {
    width: "25%",
    marginLeft: 10,
  },
  textinput: {
    width: "100%",
  },
  textinputnoparking: {
    width: "100%",
    marginLeft: 10,
  },
  bodertext: {
    borderRadius: "4px 0 0 4px",
  },
  infotitlepopup: {
    borderRadius: "0 4px 4px 0",
  },
}));
