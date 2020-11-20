import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
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
  alignForm: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
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
  const [text, setText] = useState({});
  const [token, setToken] = useState("");
  const classes = useStyle();

  useEffect(() => {
    fetch("http://localhost:5000/front/accueil", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        setText(data.text);
      })
      .catch((err) => console.log(err));
  }, []);

  const sendData = () => {
    fetch("http://localhost:5000/front/accueil", {
      credentials: "include",
      method: "POST",
      body: JSON.stringify({ _id: text._id, text: text.text }),
      headers: {
        "Content-Type": "application/json",
        "CSRF-Token": token,
      },
    })
      .then((res) => res.json())
      .then((text) => {
        // console.log(text);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container maxWidth={false} className={classes.root}>
      <Grid container spacing={4} className={classes.container}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Accueil</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className={classes.alignForm}>
              <label>Text accueil :</label>
              <textarea
                name="description"
                value={text.text}
                onChange={(e) => {
                  setText({ _id: text._id, text: e.target.value });
                }}
                rows="5"
                cols="80"
              ></textarea>
              <Button
                onClick={() => {
                  sendData();
                }}
                variant="contained"
                className={classes.button}
              >
                Send
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccueilBackOffice;
