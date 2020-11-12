import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

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
}));

const AccueilBackOffice = () => {
  const [text, setText] = useState({});
  const classes = useStyle();

  useEffect(() => {
    fetch("http://localhost:5000/front/accueil", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((text) => {
        setText(text);
      })
      .catch((err) => console.log(err));
  }, []);

  const sendData = () => {
    fetch("http://localhost:5000/front/accueil", {
      method: "POST",
      body: JSON.stringify({ _id: text._id, text: text.text }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((text) => {
        console.log(text);
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
            {/* <input type="text" name="name" value={text[0].text} /> */}
            <button
              onClick={() => {
                sendData();
              }}
            >
              Envoyer
            </button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccueilBackOffice;
