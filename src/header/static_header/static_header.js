import React, { PureComponent, Fragment } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from "styled-components";
import Checkbox from "../../components/checkbox/checkbox";

import HeaderCell from "../header_cell/header_cell";

const Static = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 2;
  background: white;
  min-width: ${props => props.width + 40}px;
  max-width: ${props => props.width + 40}px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;


class StaticHeader extends PureComponent {
  render() {
    const { columns, width, commitResize } = this.props;
    return (
      <Static width={width}>
        <Checkbox />
        {columns.map((col, index) => (
          <HeaderCell
            width={col.width}
            id={col.id}
            key={index}
            commitResize={commitResize}
            value={col.name}
          />
        ))}
      </Static>
    );
  }
}

export default StaticHeader;
