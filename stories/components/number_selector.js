import React, { Fragment } from "react";

import { withStyles } from "material-ui/styles";
import { FormControlLabel } from "material-ui/Form";
import MobileStepper from "material-ui/MobileStepper";
import IconButton from "material-ui/IconButton";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import Typography from "material-ui/Typography";

const style = {
  iconSize: {
    width: "20px",
    height: "20px",
  },
  icon: {
    fontSize: "18px"
  },
  progress: {
    width: "75%"
  },
  root: {
    justifyContent: "space-between",
    padding: "8px 0",
    width: "100%",
    background: "transparent",
    marginRight: "8px"
  }
};

const NumberSelector = ({ size, increase, decrease, classes, label }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={size}
      className={classes.root}
      classes={{ progress: classes.progress }}
      nextButton={
        <IconButton
          size="small"
          onClick={increase}
          disabled={size === 5}
          className={classes.iconSize}
        >
          <Add className={classes.icon}/>
        </IconButton>
      }
      backButton={
        <IconButton
          size="small"
          onClick={decrease}
          disabled={size === 0}
          className={classes.iconSize}
        >
          <Remove className={classes.icon}/>
        </IconButton>
      }
    />
    <Typography>{label}</Typography>
  </div>
);

export default withStyles(style)(NumberSelector);
