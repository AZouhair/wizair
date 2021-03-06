/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";


import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div>
  &copy; {1900 + new Date().getYear()} Copyright 
          <a
            href="https://www.centralesupelec.fr"
            className={aClasses}
            target="_blank"
          >
              {"  "} CentraleSupelec
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
