import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";

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

function generate(element) {
  return [0, 1, 2, 4, 5, 6, 7, 8, 9].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const LateralBar = () => {
  const classes = useStyle();
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      className={classes.lateralBar}
    >
      <div className={classes.bar}>
        <List dense={false}>
          {generate(
            <ListItem className={classes.items}>
              <ListItemAvatar>
                <AirplanemodeActiveIcon />
              </ListItemAvatar>
              <ListItemText
                primary="Single-line item"
                secondary={secondary ? "Secondary text" : null}
              />
            </ListItem>
          )}
        </List>
      </div>
    </Container>
  );
};

export default LateralBar;
