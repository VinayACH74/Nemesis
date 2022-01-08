import React from "react";
import Container from "@material-ui/core/Container";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    background: "#1d3557",
    color: "white",
  },
});

const Signin = () => {
  const classes = useStyles();
  return (
    <>
      <div className="mainbody">
        <Container maxWidth="md">
          <Typography component="div" className="flex-container">
            <form autoComplete="off" className="flex-items">
              <div>
                <h1>Sign In</h1>
              </div>
              <div>
                <TextField
                label="Email"
                id="outlined-email-small"
                variant="outlined"
                size="small"
              />
              </div>
              <br />
              <div>
                <TextField
                  type="password"
                  label="Password"
                  id="outlined-password-small"
                  variant="outlined"
                  size="small"
                />
              </div>
              <br />
              <Button variant="contained" className={classes.button}>
                Login
              </Button>
            </form>
          </Typography>
        </Container>
      </div>
    </>
  );
};

export default Signin;
