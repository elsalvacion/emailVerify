import React, { useState, useContext } from "react";
import { CSVReader } from "react-papaparse";
import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import EmailContext from "../context/emailContext";

const useStyles = makeStyles({
  uploadBtn: {
    marginTop: 15,
    width: "fit-content",
  },
});

const ReadCsv = () => {
  const classes = useStyles();
  const [data, setData] = useState(null);
  const [error, setError] = useState({
    status: false,
    msg: null,
  });

  const { processing, process } = useContext(EmailContext);

  const handleOnDrop = (json) => {
    setData(json);
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (json) => {
    setData(json);
  };

  const uploadAndAnalyze = () => {
    const emailIndex =
      data[0].data.indexOf("email") !== -1
        ? data[0].data.indexOf("email")
        : data[0].data.indexOf("emails") !== -1
        ? data[0].data.indexOf("emails")
        : -1;

    if (!data) {
      setError({
        status: true,
        msg: "Please upload a file",
      });
    } else if (emailIndex === -1) {
      setError({
        status: true,
        msg: "File must contain a column containing emails or email",
      });
    } else {
      setError({
        status: false,
        msg: null,
      });
      process(data, emailIndex);
    }
  };

  return (
    <Container>
      {error.status && (
        <Typography variant="h6" style={{ color: "#f5f5f5" }}>
          {error.msg}
        </Typography>
      )}
      <CSVReader
        onDrop={handleOnDrop}
        onError={handleOnError}
        addRemoveButton
        removeButtonColor="#659cef"
        onRemoveFile={handleOnRemoveFile}
      >
        <span style={{ padding: "50px 0", color: "#f5f5f5" }}>
          Drop CSV file here or click to upload.
        </span>
      </CSVReader>
      <Button
        variant="contained"
        color="default"
        className={classes.uploadBtn}
        endIcon={<ChevronRightIcon style={{ color: "black" }} />}
        onClick={uploadAndAnalyze}
        disabled={!data || data.length === 0 || processing}
      >
        ANALYZE & CLEAN
      </Button>
    </Container>
  );
};

export default ReadCsv;
