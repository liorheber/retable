import React, { PureComponent } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from "styled-components";

import { BACK } from "../resources/z_index";

const RowStyle = styled.div`
  display: flex;
  position: relative;
  z-index: ${BACK};
  white-space: nowrap;
  max-height: ${props => props.rowHeight}px;
  min-height: ${props => props.rowHeight}px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.selected
      ? `${props.theme.selectedBackground} !important`
      : props.theme.background};
  box-shadow: 0px 3px 10px 0px ${props => props.theme.rowBorder};
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
    this.onSelectRow = this.onSelectRow.bind(this);
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

  onSelectRow() {
    const { index, onSelectRow, selected } = this.props;
    onSelectRow({ index, selected });
  }

  render() {
    const { children, index, rowHeight, width, selected } = this.props;
    return (
      <RowStyle
        rowHeight={rowHeight}
        width={width}
        className={`row-${index}`}
        selected={selected}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onSelectRow}
      >
        {children}
      </RowStyle>
    );
  }
}

export default Row;
