import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
    flexDirection: "column",
  },
  alignForm: {
    display: "flex",
    flexDirection: "row",
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
  button: {
    margin: theme.spacing(1),
    color: "white",
    backgroundColor: "rgb(236, 65, 210)",
    "&:hover": {
      backgroundColor: "white",
      color: "rgb(236, 65, 210)",
    },
  },
}));

const AccueilBackOffice = () => {
  const classes = useStyle();

  const sendData = (e) => {
    fetch("http://localhost:5000/front/newUser", {
      method: "POST",
      body: JSON.stringify({
        nom: e.target.nom.value,
        prenom: e.target.prenom.value,
        email: e.target.email.value,
        password: e.target.password.value,
        confirmPassword: e.target.confirmPassword.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => alert(data.message))
      .catch((err) => console.log(err));
  };

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
              onSubmit={(e) => {
                e.preventDefault();
                sendData(e);
                e.target.nom.value = "";
                e.target.prenom.value = "";
                e.target.email.value = "";
                e.target.password.value = "";
                e.target.confirmPassword.value = "";
              }}
            >
              <div className={classes.alignForm}>
                <div className={classes.divContainerForm}>
                  <TextField
                    className={classes.TextField}
                    name="nom"
                    label="Nom"
                  />
                  <TextField
                    className={classes.TextField}
                    name="email"
                    label="Email"
                  />
                  <TextField
                    className={classes.TextField}
                    name="confirmPassword"
                    label="ConfirmPassword"
                    type="password"
                  />
                </div>
                <div className={classes.divContainerForm}>
                  <TextField
                    className={classes.TextField}
                    name="prenom"
                    label="Prenom"
                  />
                  <TextField
                    className={classes.TextField}
                    name="password"
                    label="Password"
                    type="password"
                  />
                </div>
              </div>
              <Button variant="contained" className={classes.button}>
                Send
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccueilBackOffice;
