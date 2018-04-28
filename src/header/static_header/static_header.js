import React, { PureComponent, Fragment } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from "styled-components";
import HeaderCell from "../header_cell/header_cell";

const Static = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 2;
  background: white;
  min-width: ${props => props.width}px;
  max-width: ${props => props.width}px;
  display: flex;
  flex-direction: row;
`;

class StaticHeader extends PureComponent {
  render() {
    const { columns, width, commitResize } = this.props;
    return (
      <Static width={width}>
        {columns.map((col, index) => (
          <HeaderCell width={col.width} id={col.id} key={index} commitResize={commitResize} value={col.name}/>
        ))}
      </Static>
    );
  }
}

export default StaticHeader;
