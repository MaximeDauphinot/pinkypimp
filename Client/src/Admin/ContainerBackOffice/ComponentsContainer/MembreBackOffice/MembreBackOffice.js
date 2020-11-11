import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  ComponentsContainer: {
    display: "flex",
  },
});

const MembreBackOffice = () => {
  const classes = useStyle();

  return (
    <Container maxWidth={false} className={classes.ComponentsContainer}>
      <div>test2</div>
    </Container>
  );
};

export default MembreBackOffice;
