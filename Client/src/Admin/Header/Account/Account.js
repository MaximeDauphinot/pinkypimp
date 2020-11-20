import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProfilePicture from "../../../ressources/mdauphin.jpg";
import { Container, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
    display: "flex",
    alignItems: "center",
  },
});

const Account = (props) => {
  const classes = useStyle();
  const [token, setToken] = useState("");
  const [user, setUser] = useState({
    prenom: "",
    non: "",
  });
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/front/logout", {
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
        setToken(data.token);
        setUser({
          prenom: data.prenom,
          nom: data.nom,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const logOut = () => {
    fetch("http://localhost:5000/front/logout", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "CSRF-Token": token,
      },
    })
      .then((res) => {
        document.location.reload();
        props.setIsLogged(false);
      })
      .catch((err) => console.log(err));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth={false} className={classes.account}>
      <div className={classes.accountName} onClick={handleClick}>
        <Avatar className={classes.Avatar}>
          <img
            src={ProfilePicture}
            alt="ProfilePicture"
            className={classes.profilePicture}
          />
        </Avatar>
        <Typography>{user.prenom + " " + user.nom}</Typography>
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        // keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem
          onClick={() => {
            handleClose();
            logOut();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Account;
