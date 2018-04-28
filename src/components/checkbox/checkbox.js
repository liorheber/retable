import React, { PureComponent, Fragment } from "react";
import Checkbox from "material-ui/Checkbox";
import { withStyles } from "material-ui/styles";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const styles = theme => ({
  size: {
    width: 30,
    height: 30
  },
  sizeIcon: {
    fontSize: 20,
    color: "#939cac"
  }
});

const CustomCheckbox = ({ classes, onClick, checked }) => (
  <Checkbox
    checked={checked}
    onClick={onClick}
    className={classes.size}
    icon={<CheckBoxOutlineBlankIcon className={classes.sizeIcon} />}
    checkedIcon={<CheckBoxIcon className={classes.sizeIcon} />}
  />
);

export default withStyles(styles)(CustomCheckbox);
