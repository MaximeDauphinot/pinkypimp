import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";

const menuLateralBar = [
  {
    name: "Accueil",
    icon: <AirplanemodeActiveIcon />,
  },
  {
    name: "La team",
    icon: <AirplanemodeActiveIcon />,
  },
  // {
  //   name: "Les reufs",
  //   icon: <AirplanemodeActiveIcon />,
  // },
  // {
  //   name: "Résumé",
  //   icon: <AirplanemodeActiveIcon />,
  // },
  // {
  //   name: "news",
  //   icon: <AirplanemodeActiveIcon />,
  // },
  // {
  //   name: "Autres",
  //   icon: <AirplanemodeActiveIcon />,
  // },
  {
    name: "New admin user",
    icon: <AirplanemodeActiveIcon />,
  },
];

const useStyle = makeStyles({
  lateralBar: {
    display: "flex",
    backgroundColor: "rgb(58, 60, 66)",
    maxWidth: 225,
  },
  bar: {
    width: "100%",
    color: "white",
  },
  items: {
    "&:hover": {
      backgroundColor: "rgb(45, 47, 52)",
    },
  },
});

const LateralBar = (props) => {
  const classes = useStyle();

  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      className={classes.lateralBar}
    >
      <div className={classes.bar}>
        <List dense={false}>
          {menuLateralBar.map((value, index) => {
            return (
              <ListItem
                className={classes.items}
                key={index}
                onClick={() => {
                  props.handleComponents(value.name);
                }}
              >
                <ListItemAvatar>{value.icon}</ListItemAvatar>
                <ListItemText primary={value.name} />
              </ListItem>
            );
          })}
        </List>
      </div>
    </Container>
  );
};

export default LateralBar;
