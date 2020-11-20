import React, { useEffect, useState } from "react";
import Login from "./Login/Login";
import { makeStyles } from "@material-ui/core/styles";
import ContainerBackOffice from "./ContainerBackOffice/ContainerBackOffice";
import Header from "./Header/Header";
import Container from "@material-ui/core/Container";
import Cookies from "js-cookie";

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
  const [token, setToken] = useState();
  const classes = useStyle();
  const cookieIsloggedIn = Cookies.get("isLoggedIn");
  const [isLoggedIn, setIsLoggedIn] = useState(cookieIsloggedIn ? true : false);

  useEffect(() => {
    if (!cookieIsloggedIn) {
      fetch("http://localhost:5000/front/login", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.isLoggedIn === undefined) {
            setIsLoggedIn(false);
          } else if (data.isLoggedIn === true) {
            setIsLoggedIn(true);
          }
          setToken(data.token);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleLoginClick = (isLogged) => {
    setIsLoggedIn(isLogged);
  };

  return (
    <Container maxWidth={false} disableGutters={true} className={classes.admin}>
      {isLoggedIn === true ? (
        <>
          <Header setIsLogged={handleLoginClick} />
          <ContainerBackOffice />
        </>
      ) : (
        <Login setIsLogged={handleLoginClick} token={token} />
      )}
    </Container>
  );
};

export default Admin;
