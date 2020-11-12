import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    marginTop: "20px",
  },
  formContainer: {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    border: "1px solid",
    borderColor: theme.palette.text.secondary,
    borderRadius: "5px",
  },
  divContainerForm: {
    width: "100%",
    padding: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  TextField: {
    width: "inherit",
  },
}));

const AccueilBackOffice = () => {
  const [text, setText] = useState({});
  const classes = useStyle();

  //   useEffect(() => {
  //     fetch("http://localhost:5000/front/accueil", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((text) => {
  //         setText(text);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  //   const sendData = () => {
  //     fetch("http://localhost:5000/front/accueil", {
  //       method: "POST",
  //       body: JSON.stringify({ _id: text._id, text: text.text }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((text) => {
  //         console.log(text);
  //       })
  //       .catch((err) => console.log(err));
  //   };

  return (
    <Container maxWidth={false} className={classes.root}>
      <Grid container spacing={4} className={classes.container}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>New admin user</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <label>Add a new user</label>
            <form
              className={classes.formContainer}
              noValidate
              autoComplete="off"
            >
              <div className={classes.divContainerForm}>
                <TextField className={classes.TextField} id="Nom" label="Nom" />
                <TextField
                  className={classes.TextField}
                  id="Email"
                  label="Email"
                />
                <TextField
                  className={classes.TextField}
                  id="ConfirmPassword"
                  label="ConfirmPassword"
                />
              </div>
              <div className={classes.divContainerForm}>
                <TextField
                  className={classes.TextField}
                  id="Prenom"
                  label="Prenom"
                />
                <TextField
                  className={classes.TextField}
                  id="Password"
                  label="Password"
                />
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccueilBackOffice;
