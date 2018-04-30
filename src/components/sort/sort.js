import React, { PureComponent, Fragment } from "react";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import IconButton from "material-ui/IconButton";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  size: {
    width: 30,
    height: 30
  },
  sizeIcon: {
    fontSize: 20,
    color: "#ced3df",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#939cac"
    }
  },
  hiddenIcon: {
    fontSize: 20,
    color: "transparent",
    transition: "color 0.3s ease"
  }
});

class Sort extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, hover, direction } = this.props;
    return (
      <IconButton className={classes.size}>
        {direction === "asc" ? (
          <ArrowUpward
            className={hover ? classes.sizeIcon : classes.hiddenIcon}
          />
        ) : (
          <ArrowDownward
            className={hover ? classes.sizeIcon : classes.hiddenIcon}
          />
        )}
      </IconButton>
    );
  }
}

export default withStyles(styles)(Sort);
