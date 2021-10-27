import React, { Fragment } from "react";

import { Typography, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { CSVDownloader } from "react-papaparse";

const useStyles = makeStyles({
  result: {
    // minWidth: "90%",
    // maxWidth: "90%",
    // minHeight: "50vh",
    // maxHeight: "50vh",
    background: "transparent",
    // border: "1px solid #f5f5f5",
    color: "white",
    // overflowY: "auto",
    // position: "relative",

    // "&:focus": {
    //   outline: 0,
    // },
  },
});
const Verified = ({ result }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography style={{ color: "#bdbdbd" }}>
        Here are you verify emails
      </Typography>
      <br />

      <Card className={classes.result}>
        {/* {result.data.map(
          (field, i) =>
            i !== 0 && (
              <Typography style={{ padding: "5px" }}>
                {field[result.emailIndex]}
              </Typography>
            )
        )} */}

        <Typography variant="h6">
          {result.noOfCorrectEmails} emails verfied
        </Typography>
      </Card>
      {/* {console.log(result.csv)} */}
      <CSVDownloader
        data={result.csv}
        type="button"
        filename={"verifiedEmails"}
        style={{
          background: "#f5f5f5",
          padding: 10,
          margin: "10px 0",
          cursor: "pointer",

          "&:focus": {
            outline: 0,
          },
        }}
      >
        Download CSV
      </CSVDownloader>
    </Fragment>
  );
};

export default Verified;
