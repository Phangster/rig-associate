import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Button from "../Tools/ButtonNav";

import styles from "../../../assets/jss/material-kit-react/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          // target="_blank" 
          className={classes.navLink}
        >
            Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/raffleshealthinsurance"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
            Raffles Health Insurance
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/sompoinsurance"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
            SOMPO Insurance
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/nowhealthmedical"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
            NOW Health Medical
        </Button>
      </ListItem>
    </List>
  );
}