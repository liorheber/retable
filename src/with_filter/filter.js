import React, { PureComponent, Fragment } from "react";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import IconButton from "material-ui/IconButton";
import Close from "@material-ui/icons/Close";
import { withStyles } from "material-ui/styles";
import styled from "styled-components";

import { FilterConsumer } from "./with_filter";

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
  render() {
    const { classes, isOpen } = this.props;
    return (
      <FilterWrapper isOpen={isOpen}>
        <Paper className={classes.paper}>
          <Header>
            Filter By
            <FilterConsumer>
              {({ closeFilter }) => (
                <IconButton className={classes.close} onClick={closeFilter}>
                  <Close className={classes.closeIcon} />
                </IconButton>
              )}
            </FilterConsumer>
          </Header>
          <Content>
            <TextField/>
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
