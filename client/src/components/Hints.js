import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import React from "react";

const Hints = () => {
  return (
    <div>
      <Typography align="center" variant="h5">
        Hints
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="1. Upload CSV format file " />
        </ListItem>
        <ListItem>
          <ListItemText primary="2. Emails must be in 1 column (You may include unlimited columns of other data)." />
        </ListItem>
        <ListItem>
          <ListItemText primary="3. When finished uploading, you may analyze or clean your list." />
        </ListItem>
      </List>
    </div>
  );
};

export default Hints;
