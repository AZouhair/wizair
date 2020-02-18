import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Cached from "@material-ui/icons/Cached";
import Dvr from "@material-ui/icons/Dvr";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem.js";
import InfoArea from "./InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
          Wizair is a project aiming at developping a solution to measure 
          and track air quality for regular consumers in order to improve their health by giving advices
          to reduce their exposure to polluted air.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Real Time"
              description="We provide real time informations and recommendations to improve your daily life."
              icon={Cached}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Statistics and Machine Learning"
              description="We use statistics and machine learning to predict the air quality in order to provide the best recommandations."
              icon={Dvr}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Secure"
              description="Your data is protected by state of the art security."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};