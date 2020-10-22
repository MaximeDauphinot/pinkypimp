import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Logo from "../../ressources/logo-blanc.png";
import Button from "@material-ui/core/Button";

const useStyle = makeStyles({
  root: {
    margin: "auto",
    paddingBottom: 25,
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
    backgroundColor: "rgb(236, 65, 210)",
    color: "white",
    maxWidth: 398,
    width: 398,
    marginTop: 10,
    alignSelf: "center",
    "&:hover": {
      backgroundColor: "white",
      color: "rgb(236, 65, 210)",
    },
  },
});

const Login = (props) => {
  const classes = useStyle();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <img src={Logo} alt="logo" className={classes.logo} />
        <TextField
          className={classes.inputs}
          id="Email"
          label="Email"
          variant="outlined"
        />
        <TextField
          className={classes.inputs}
          id="Password"
          label="Password"
          variant="outlined"
        />
        <Button
          variant="contained"
          className={classes.Button}
          onClick={() => {
            fetch("http://localhost:5000/", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }).then((res) => res.json().then((test) => console.log(test)));
            props.setIsLogged();
          }}
        >
          Connexion
        </Button>
      </CardContent>
    </Card>
  );
};

export default Login;
