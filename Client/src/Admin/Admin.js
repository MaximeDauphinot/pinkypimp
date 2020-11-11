import React, { useState } from "react";
import Login from "./Login/Login";
import { makeStyles } from "@material-ui/core/styles";
import ContainerBackOffice from "./ContainerBackOffice/ContainerBackOffice";
import Header from "./Header/Header";
import Container from "@material-ui/core/Container";

const useStyle = makeStyles({
  admin: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "rgb(245, 232, 239)",
  },
});

const Admin = () => {
  const [isLogged, setIsLogged] = useState(false);
  const classes = useStyle();

  const handleLoginClick = () => {
    setIsLogged(true);
  };

  return (
    <Container maxWidth={false} disableGutters={true} className={classes.admin}>
      {isLogged ? (
        <>
          <Header />
          <ContainerBackOffice />
        </>
      ) : (
        <Login setIsLogged={handleLoginClick} />
      )}
      {/* <Header />
      <ContainerBackOffice /> */}
    </Container>
  );
};

export default Admin;
