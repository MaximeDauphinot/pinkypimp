import React, { useReducer, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AccueilBackOffice from "./AccueilBackOffice/AccueilBackOffice";
import MembreBackOffice from "./MembreBackOffice/MembreBackOffice";
import NewAdminUser from "./NewAdminUser/NewAdminUser";

const useStyle = makeStyles({
  ComponentsContainer: {
    display: "flex",
  },
});

const menuReducer = (prevState, action) => {
  switch (action.type) {
    case "Accueil":
      return <AccueilBackOffice />;
    case "La team":
      return <MembreBackOffice />;
    // case "Les reufs":
    //   return <Partenaire />;
    // case "Résumé":
    //   return <Resume />;
    // case "news":
    //   return <News />;
    // case "Autres":
    //   return <News />;
    case "New admin user":
      return <NewAdminUser />;
    default:
      throw new Error("Something goes wrong !");
  }
};

const ComponentsContainer = (props) => {
  const [menuSelected, dispatchMenuSelected] = useReducer(menuReducer, []);
  const classes = useStyle();

  useEffect(() => {
    dispatchMenuSelected({ type: props.containerComponent });
  }, [props.containerComponent]);

  return (
    <Container maxWidth={false} className={classes.ComponentsContainer}>
      {menuSelected}
    </Container>
  );
};

export default ComponentsContainer;
