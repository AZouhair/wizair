/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons

// core components
import Button from "./CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/signup"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
        Sign Up
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/signin"
          color="transparent"
          //target="_blank"
          className={classes.navLink}
        > 
        Sign In
        </Button>
      </ListItem>
    </List>
  );
};