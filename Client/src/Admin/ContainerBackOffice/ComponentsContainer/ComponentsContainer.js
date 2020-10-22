import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyle = makeStyles({
  ComponentsContainer: {
    display: "flex",
  },
});

const ComponentsContainer = () => {
  const classes = useStyle();

  return (
    <Container maxWidth={false} className={classes.ComponentsContainer}>
      <div></div>
    </Container>
  );
};

export default ComponentsContainer;
