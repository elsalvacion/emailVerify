import { Card, CardContent, Container, Typography } from "@material-ui/core";
import React, { useContext, Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import Spinner from "./Spinner";
import Hints from "./Hints";
import EmailContext from "../context/emailContext";
import Verified from "./Verified";
const useStyles = makeStyles({
  card: {
    minHeight: "82vh",
    maxHeight: "82vh",
    background: "transparent",
    color: "#f5f5f5",
    "@media (max-width:780px)": {
      // eslint-disable-line no-useless-computed-key
      maxHeight: "82vh",
      height: "fit-content",
    },
  },
  spinner: {
    padding: 25,
    marginBottom: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});
const RightSide = () => {
  const classes = useStyles();
  const { processing, downloading, uploading, result } =
    useContext(EmailContext);
  return (
    <Card elevation={2} className={classes.card}>
      <CardContent>
        <Container className={classes.spinner}>
          {!result ? (
            <Fragment>
              <Hints />
              {(uploading || processing || downloading) && <Spinner />}
              {uploading && <Typography>uploading ...</Typography>}
              {processing && <Typography>processing ...</Typography>}
              {downloading && <Typography>downloading results ...</Typography>}
            </Fragment>
          ) : (
            <Verified result={result} />
          )}
        </Container>
      </CardContent>
    </Card>
  );
};

export default RightSide;
