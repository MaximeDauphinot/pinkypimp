import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LateralBar from "./LateralBar/LateralBar";
import Container from "@material-ui/core/Container";
import ComponentsContainer from "./ComponentsContainer/ComponentsContainer";

const useStyle = makeStyles({
  ContainerBackOffice: {
    display: "flex",
    padding: 0,
    minHeight: "calc(100vh - 70px)",
  },
});

const ContainerBackOffice = () => {
  const classes = useStyle();

  return (
    <Container maxWidth={false} className={classes.ContainerBackOffice}>
      <LateralBar />
      <ComponentsContainer />
    </Container>
  );
};

export default ContainerBackOffice;
