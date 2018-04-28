import React, { PureComponent, Fragment } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from "styled-components";

import HeaderCell from "../header_cell/header_cell";

const Dynamic = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 2;
  background: white;
  display: flex;
  flex-direction: row;
`;

const Row = styled.div`
  display: flex;
  white-space: nowrap;
`;

class DynamicHeader extends PureComponent {
  render() {
    const { columns, commitResize } = this.props;
    return (
      <ScrollSyncPane>
        <Dynamic>
          {columns.map((col, index) => (
            <HeaderCell width={col.width} id={col.id} key={index} commitResize={commitResize} value={col.name}/>
          ))}
        </Dynamic>
      </ScrollSyncPane>
    );
  }
}

export default DynamicHeader;
