import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProfilePicture from "../../../ressources/mdauphin.jpg";
import { Container, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

const useStyle = makeStyles({
  account: {
    display: "flex",
    maxHeight: 75,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  profilePicture: {
    maxWidth: 40,
    maxHeight: 40,
    borderRadius: "50%",
  },
  Avatar: {
    margin: 10,
  },
  accountName: {
    color: "white",
  },
});

const Account = () => {
  const classes = useStyle();

  return (
    <Container maxWidth={false} className={classes.account}>
      <Avatar className={classes.Avatar}>
        <img
          src={ProfilePicture}
          alt="ProfilePicture"
          className={classes.profilePicture}
        />
      </Avatar>
      <Typography className={classes.accountName}>Maxime Dauphinot</Typography>
    </Container>
  );
};

export default Account;
