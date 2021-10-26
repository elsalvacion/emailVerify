import { Container, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Typist from "react-typist";
const useStyles = makeStyles({
  nav: {
    boxShadow: "0 1px 1px #f5f5f5 ",
    marginBottom: 50,
    padding: 10,
    textAlign: "center",
    color: "white",
  },
});
const Header = () => {
  const classes = useStyles();
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <div className={classes.nav}>
      <Container>
        {count ? (
          <Typist
            avgTypingDelay={50}
            cursor={{
              show: true,
              blink: true,
              element: "",
              hideWhenDone: false,
              hideWhenDoneDelay: 1000,
            }}
            onTypingDone={() => setCount(0)}
          >
            <Typography variant="h4">Email Verify</Typography>
            <Typist.Backspace count={11} delay={800} />
          </Typist>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
};

export default Header;
