import React, { useState, useContext } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import EmailContext from "../context/emailContext";

const useStyles = makeStyles({
  container: {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  uploadBtn: {
    marginTop: 15,
    width: "fit-content",
  },
});

const UploadFrom = () => {
  const classes = useStyles();

  const { processing, downloading, uploading, upload } =
    useContext(EmailContext);

  const [file, setFiles] = useState([]);
  const [error, setError] = useState({
    status: false,
    msg: null,
  });

  const handleFiles = (file) => {
    setFiles(file);
  };

  const uploadAndAnalyze = () => {
    if (file.length === 0) {
      setError({
        status: true,
        msg: "Please upload a file",
      });
    } else if (file.length > 1) {
      setError({
        status: true,
        msg: "Please upload only one file",
      });
    } else {
      setError({
        status: false,
        msg: null,
      });
      upload(file);
    }
  };

  return (
    <div className={classes.container}>
      {error.status && (
        <Typography variant="h6" style={{ color: "#f5f5f5" }}>
          {error.msg}
        </Typography>
      )}
      <DropzoneArea
        acceptedFiles={[".csv"]}
        showPreviews={false}
        maxFileSize={10000000}
        onChange={handleFiles}
      />
      <Button
        variant="contained"
        color="default"
        className={classes.uploadBtn}
        endIcon={<ChevronRightIcon style={{ color: "black" }} />}
        onClick={uploadAndAnalyze}
        disabled={processing || uploading || downloading}
      >
        ANALYZE & CLEAN
      </Button>
    </div>
  );
};

export default UploadFrom;
