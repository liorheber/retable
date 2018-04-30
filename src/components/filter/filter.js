import React, { PureComponent, Fragment } from "react";
import FilterIcon from "@material-ui/icons/FilterList";
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
    transition: "color 0.3s ease"
  },
  hiddenIcon: {
    fontSize: 20,
    color: "transparent",
    transition: "color 0.3s ease"
  }
});

class Filter extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, hover } = this.props;
    return (
      <IconButton className={classes.size}>
          <FilterIcon className={hover ? classes.sizeIcon : classes.hiddenIcon} />
      </IconButton>
    );
  }
}

export default withStyles(styles)(Filter);
