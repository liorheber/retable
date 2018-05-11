import React, { PureComponent } from "react";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ArrowDownward from "@material-ui/icons/KeyboardArrowDown";
import IconButton from "material-ui/IconButton";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  size: {
    width: 30,
    height: 30
  },
  sizeIcon: {
    fontSize: 24,
    color: "#ced3df",
    "&:hover": {
      color: "#939cac"
    }
  }
});

class ExpandCollapse extends PureComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = { expanded: false };
  }

  onClick(event) {
    event.stopPropagation();
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  }

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    return (
      <IconButton className={classes.size} onClick={this.onClick}>
        {expanded ? (
          <ArrowDownward className={classes.sizeIcon} />
        ) : (
          <ChevronRight className={classes.sizeIcon} />
        )}
      </IconButton>
    );
  }
}

export default withStyles(styles)(ExpandCollapse);
