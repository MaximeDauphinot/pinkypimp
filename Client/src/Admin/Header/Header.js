import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../ressources/logo-blanc.png";
import Container from "@material-ui/core/Container";
import Account from "./Account/Account";

const useStyle = makeStyles({
  header: {
    display: "flex",
    backgroundColor: "rgb(45, 47, 52)",
    maxHeight: 70,
    width: "100vw",
  },
  logo: {
    maxWidth: 100,
  },
});

const Header = () => {
  const classes = useStyle();

  return (
    <Container maxWidth={false} className={classes.header}>
      <img src={Logo} alt="Logo" className={classes.logo} />
      <Account />
    </Container>
  );
};

export default Header;
