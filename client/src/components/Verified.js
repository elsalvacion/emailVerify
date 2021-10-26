import React, { Fragment } from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  result: {
    minWidth: "90%",
    maxWidth: "90%",
    minHeight: "50vh",
    maxHeight: "50vh",
    background: "transparent",
    border: "1px solid #f5f5f5",
    color: "white",
    overflowY: "auto",
    position: "relative",

    "&:focus": {
      outline: 0,
    },
  },
});
const Verified = ({ result }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography variant="h4" style={{ color: "#bdbdbd" }}>
        Here are you verify emails
      </Typography>
      <br />

      <div className={classes.result}>
        {result.msg.map((email) => (
          <Typography style={{ padding: "5px" }}>{email}</Typography>
        ))}
      </div>

      <Typography variant="h6" style={{ color: "teal" }}>
        {result.filtered}% of emails filtered out
      </Typography>
    </Fragment>
  );
};

export default Verified;
