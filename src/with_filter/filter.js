import React, { PureComponent, Fragment } from "react";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import IconButton from "material-ui/IconButton";
import Close from "@material-ui/icons/Close";
import { withStyles } from "material-ui/styles";
import styled from "styled-components";

const Content = styled.div`
  padding: 14px;
`;

const FilterWrapper = styled.div`
  display: ${props => (props.isOpen ? "block" : "none")};
  position: fixed;
  z-index: 1000;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 4px 14px 14px;
  background: #939cac;
  color: white;
  line-height: 30px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  border-top: 1px solid #e9ebf0;
`;

const styles = theme => ({
  paper: {
    fontSize: "14px",
    fontFamily: "RobotoRg, 'Helvetica Neue', sans-serif"
  },
  close: {
    width: "30px",
    height: "30px"
  },
  closeIcon: {
    fontSize: "20px",
    color: "white"
  }
});

class Filter extends PureComponent {
  constructor(props) {
    super(props);
    this.filter = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    window.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    const { closeFilter, isOpen } = this.props;
    if (isOpen && this.filter.current && !this.filter.current.contains(event.target)) {
      closeFilter();
    }
  }

  render() {
    const { classes, isOpen, closeFilter } = this.props;
    return (
        <FilterWrapper isOpen={isOpen} innerRef={this.filter}>
          <Paper className={classes.paper}>
            <Header>
              Filter By
              <IconButton className={classes.close} onClick={closeFilter}>
                <Close className={classes.closeIcon} />
              </IconButton>
            </Header>
            <Content>
              <TextField />
            </Content>
            <Actions>
              <Button>Clear Filter</Button>
              <Button>Apply</Button>
            </Actions>
          </Paper>
        </FilterWrapper>
    );
  }
}

export default withStyles(styles)(Filter);
