import React, { useState } from "react";
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
  const [containerComponent, setContainerComponent] = useState("Accueil");
  const classes = useStyle();

  const handleComponents = (name) => {
    setContainerComponent(name);
  };

  return (
    <Container maxWidth={false} className={classes.ContainerBackOffice}>
      <LateralBar handleComponents={handleComponents} />
      <ComponentsContainer containerComponent={containerComponent} />
    </Container>
  );
};

export default ContainerBackOffice;
