import React, { PureComponent, Fragment } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from "styled-components";

const RowStyle = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  white-space: nowrap;
  max-height: ${props => props.rowHeight}px;
  min-height: ${props => props.rowHeight}px;
  transition: background-color 0.2s ease;
  background-color: white;
  box-shadow: 0px 3px 10px 0px #e9ebf0;
  margin: 1px 0 0 0;
  align-items: center;
  height: 100%;
  width: ${props => props.width}px;
`;

class Row extends PureComponent {
  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter() {
    const { index } = this.props;
    const rows = document.getElementsByClassName(`row-${index}`);
    rows[0].classList.add("row-hover");
    rows[1].classList.add("row-hover");
  }

  onMouseLeave() {
    const { index } = this.props;
    const rows = document.getElementsByClassName(`row-${index}`);
    rows[0].classList.remove("row-hover");
    rows[1].classList.remove("row-hover");
  }

  render() {
    const { children, index, rowHeight, width, onSelectRow } = this.props;
    return (
      <RowStyle
        rowHeight={rowHeight}
        key={index}
        width={width}
        className={`row-${index}`}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={() => onSelectRow(index)}
      >
        {children}
      </RowStyle>
    );
  }
}

export default Row;
