import { Grid } from "@material-ui/core";
import React from "react";
import RightSide from "../components/RightSide";
import UploadFrom from "../components/UploadFrom";
// import EmailContext from "../context/emailContext";
import Zoom from "react-reveal/Zoom";
const Content = () => {
  // const { processing, downloading, uploading } = useContext(EmailContext);

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Zoom>
          <UploadFrom />
        </Zoom>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Zoom>
          <RightSide />
        </Zoom>
      </Grid>
    </Grid>
  );
};

export default Content;
