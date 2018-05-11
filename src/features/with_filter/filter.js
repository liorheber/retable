import React, { PureComponent, Fragment } from "react";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import IconButton from "material-ui/IconButton";
import Close from "@material-ui/icons/Close";
import { withStyles } from "material-ui/styles";
import styled, { keyframes } from "styled-components";

const filterInAnimation = keyframes`
  0% {
    transform-origin: top;
    transform:scaleY(0);
    opacity: 0;
  }
  50% {
    transform-origin: top;
    transform:scaleY(.005);
    opacity: 0.1;
  }
  100% {
    transform-origin: top;
    transform:scaleY(1);
    opacity: 1;
  }
`;

const filterOutAnimation = keyframes`
  0% {
    transform-origin: top;
    transform:scaleY(1);
    opacity: 1;
  }
  50% {
    transform-origin: top;
    transform:scaleY(.005);
    opacity: 0.1;
  }
  100% {
    transform-origin: top;
    transform:scaleY(0);
    opacity: 0;
  }
`;

const Content = styled.div`
  padding: 14px;
`;

const FilterWrapper = styled.div`
  animation: ${props => (props.isOpen ? filterInAnimation : filterOutAnimation)} 0.4s cubic-bezier(0.17, 0.84, 0.49, 1.29) forwards;
  position: fixed;
  z-index: 1000;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 4px 6px 14px;
  background: #939cac;
  color: white;
  line-height: 30px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 14px;
  border-top: 1px solid #e9ebf0;
`;

const styles = theme => ({
  paper: {
    fontSize: "14px",
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
    window.addEventListener("scroll", this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener("mousedown", this.handleClickOutside);
    window.removeEventListener("scroll", this.handleClickOutside);
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
