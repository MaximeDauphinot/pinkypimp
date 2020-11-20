import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardContent, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Logo from "../../ressources/logo-blanc.png";
import Button from "@material-ui/core/Button";
// import Cookies from "js-cookie";
// import { useStateWithLocalStorage } from "../components/hooks";

const useStyle = makeStyles({
  root: {
    margin: "auto",
    minWidth: 450,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  inputs: {
    margin: "10px",
  },
  logo: {
    maxWidth: 300,
    margin: "0px auto",
  },
  Button: {
    color: "white",
    maxWidth: 398,
    width: 398,
    marginTop: 10,
    alignSelf: "center",
    backgroundColor: "rgb(236, 65, 210)",
    "&:hover": {
      backgroundColor: "white",
      color: "rgb(236, 65, 210)",
    },
  },
  errMessage: {
    color: "red",
    margin: "10px",
  },
});

const Login = (props) => {
  const [errMessage, setErrMessage] = useState("");
  const classes = useStyle();

  const sendData = (e) => {
    fetch("http://localhost:5000/front/login", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "CSRF-Token": props.token,
      },
      method: "POST",
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "ok") {
          return props.setIsLogged(true);
        }
        setErrMessage(data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <img src={Logo} alt="logo" className={classes.logo} />
        <form
          className={classes.content}
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            setErrMessage("");
            sendData(e);
          }}
        >
          <TextField
            required
            className={classes.inputs}
            name="email"
            label="Email"
            variant="outlined"
          />
          <TextField
            required
            className={classes.inputs}
            name="password"
            label="Password"
            type="password"
            variant="outlined"
          />
          <Button
            variant="contained"
            className={classes.Button}
            type="submit"
            // onClick={props.setIsLogged}
          >
            Connexion
          </Button>
          <Typography className={classes.errMessage}>{errMessage}</Typography>
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;
